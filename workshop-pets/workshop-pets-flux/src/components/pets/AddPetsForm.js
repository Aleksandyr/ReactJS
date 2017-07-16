import React from 'react'
import Input from '../common/forms/Input'

const AddPetsFrom = (props) => (
  <form>
  <div>{props.error}</div>
  <Input 
    name='name'
    placeholder='Name'
    value={props.pet.name}
    onChange={props.onChange}/>
  <Input 
    name='age'
    placeholder='Age'
    type='number'
    value={props.pet.age}
    onChange={props.onChange}/>
  <div>  
    <label htmlFor="type" />
    <select
      name="type"
      value={props.pet.type}
      onChange={props.onChange}>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <Input 
    name='image'
    placeholder='Image Url'
    value={props.pet.image}
    onChange={props.onChange}/>
  <Input 
    name='breed'
    placeholder='Breed'
    value={props.pet.breed}
    onChange={props.onChange}/>
  <input type="submit" value='Add' onClick={props.onSave} />
  </form>
)

export default AddPetsFrom
