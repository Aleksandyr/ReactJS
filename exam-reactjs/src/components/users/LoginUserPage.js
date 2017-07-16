import React, { Component } from 'react'
import Auth from '../common/users/Auth'
import LoginUserForm from './LoginUserForm'
import FormHelpers from '../common/forms/FormHelpers'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginUserPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    // validate form
    userActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      const firstError = FormHelpers.getFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)
      toastr.success(data.message)
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login user page</h1>
        <LoginUserForm
          error={this.state.error}
          user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default LoginUserPage