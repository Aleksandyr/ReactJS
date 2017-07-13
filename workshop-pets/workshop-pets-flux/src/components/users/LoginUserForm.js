import React from 'react'
import Input from '../common/Input'

const LoginUserForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='email'
      type='email'
      placeholder='E-Mail'
      value={props.user.email}
      onChange={props.onChange}/>
    <Input
      name='passowrd'
      type='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange}/>
    <input type="submit" onClick={props.onSave} />
  </form>
)

export default LoginUserForm
