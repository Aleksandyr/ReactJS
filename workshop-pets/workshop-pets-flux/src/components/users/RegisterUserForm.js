import React from 'react'
import Input from '../common/forms/Input'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input 
     name='email'
     placeholder='E-Mail'
     type='email'
     value={props.user.email}
     onChange={props.onChange} />
    <Input 
      name='name'
      placeholder='Name'
      value={props.user.name}
      onChange={props.onChange}/>
    <Input 
      name='password'
      type='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange}/>
    <Input 
      name='confirmPassword'
      type='password'
      placeholder='Confirm Password'
      value={props.user.confirmPassword}
      onChange={props.onChange}/>
    <input type="submit" onClick={props.onSave} />
  </form>
)

export default RegisterForm