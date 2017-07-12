import React from 'react'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>
    <label htmlFor='email'>E-mail</label>
    <input 
      type='email'
      name='email'
      palceholder='E-mail'
      value={props.user.email}
      onChange={props.onChange }/>
    <br />
    <label htmlFor='name'>Name</label>
    <input 
      type='name'
      name='name'
      palceholder='Name'
      value={props.user.name}
      onChange={props.onChange }/>
    <br />
    <label htmlFor='password'>Passowrd</label>
    <input 
      type='password'
      name='password'
      palceholder='Password'
      value={props.user.password}
      onChange={props.onChange }/>
    <br />
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input 
      type='password'
      name='confirmPassword'
      palceholder='Confirm Password'
      value={props.user.confirmPassword}
      onChange={props.onChange }/>
    <br />
    <input type="submit" onClick={props.onSave} />
  </form>
)

export default RegisterForm