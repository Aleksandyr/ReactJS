import React, { Component } from 'react'
import FormHelpers from '../common/FormHelpers'
import RegisterForm from './RegisterUserForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class RegisterUserPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456',
        confirmPassword: '123456',
        name: 'test'
      },
      error: ''
    }

    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    userStore.on(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration)
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration)
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()
    if(!this.validateUser()) {
      return
    }

    userActions.register(this.state.user)
  }

  handleUserRegistration (data) {
    if (!data.success) {
      const firstError = 
        data.errors ?
        Object.keys(data.errors).map(k => data.errors[k])[0] :
        data.message
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push('user/login')
    }
  } 

  validateUser () {
    const user = this.state.user;
    let formIsValid = true
    let error = ''

    if (user.password !== user.confirmPassword) {
      error = 'Password and confirmation password do not match'
      formIsValid = false
    }

    if (error) {
      this.setState({error})
    }
    return formIsValid
  }

  render () {
    return (
      <div>
        <h1>Register user page</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default RegisterUserPage