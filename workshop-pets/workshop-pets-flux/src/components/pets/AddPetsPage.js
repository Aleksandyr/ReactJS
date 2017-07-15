import React, { Component } from 'react'
import AddPetsFrom from './AddPetsForm'
import FormHelper from '../common/forms/FormHelpers'

class AddPetsPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      pet: {
        name: 'Tom',
        age: 2,
        imageUrl: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        type: 'Cat',
        breed: 'some'
      },
      error: ''
    }
  }

  handlePetChange (event) {
    FormHelper.handleFormChange.bind(this)(event, 'pet')
  }

  handlePetForm (event) {
    event.preventDefault()

    //validate form
  }
  
  render () {
    return (
    <AddPetsFrom
      pet={this.state.pet}
      error={this.state.error}
      onChange={this.handlePetChange.bind(this)}
      onSave={this.handlePetForm.bind(this)} />
    )
  }
}

export default AddPetsPage
