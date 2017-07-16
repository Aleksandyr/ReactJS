import React, { Component } from 'react'
import AddPetsFrom from './AddPetsForm'
import FormHelper from '../common/forms/FormHelpers'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import FormHelpers from '../common/forms/FormHelpers'
import toastr from 'toastr'

class AddPetsPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      pet: {
        name: 'Tom',
        age: 2,
        image: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        type: 'Cat',
        breed: 'some'
      },
      error: ''
    }

    this.handlePetCreation = this.handlePetCreation.bind(this)

    petStore.on(
      petStore.eventTypes.ADD_PET,
      this.handlePetCreation
    )
  }

  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.ADD_PET,
      this.handlePetCreation
    )
  }

  handlePetChange (event) {
    FormHelper.handleFormChange.bind(this)(event, 'pet')
  }

  handlePetForm (event) {
    event.preventDefault()

    //validate form
    petActions.addPet(this.state.pet)
  }

  handlePetCreation (data) {
    if (!data.success) {
      const firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/pets/details/${data.pet.id}`)
    }
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
