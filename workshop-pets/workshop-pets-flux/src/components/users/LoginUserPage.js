import React, { Component } from 'react'
import LoginUserForm from './LoginUserForm'

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
  }

  handleUserChange (event) {

  }

  handleUserForm (event) {
    event.preventDefault()
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