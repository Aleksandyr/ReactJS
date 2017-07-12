import React from 'react'

const Input = (props) => (
  <input
    type={props.type}
    name={props.name}
    placeholder={props.name}
    value={props.user.value}
    onChange={props.onChange}
     />
)