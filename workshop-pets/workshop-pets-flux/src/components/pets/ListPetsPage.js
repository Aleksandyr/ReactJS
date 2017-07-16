import React, { Component } from 'react'
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class ListPetsPage extends Component {
  constructor (props) {
    super (props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1

    this.state = {
      pets: [],
      page: page
    }

    this.handlePetsFetching = this.handlePetsFetching.bind(this)

    petStore.on(
      petStore.eventTypes.PETS_FETCHED,
      this.handlePetsFetching
    )
  }

  componentDidMount () {
    petActions.all(this.state.page)
  }

  conponentWillUnmount () {
    petStore.removeListnere(
      petStore.eventTypes.PETS_FETCHED,
      this.handlePetsFetching
    )
  }

  handlePetsFetching (data) {
    this.setState({
      pets: data
    })
  }

  goToPrevPage () {

  }

  goToNextPage () {
    if (this.state.pets.length === 0) {
      return
    }

    let page = this.state.page
    page++

    this.setState({
      page
    })

    this.props.history.push(`/?page=${this.state.page}`)
    petActions.all(page)
  }

  render () {
    let pets = 'No available pets'
    if (this.state.pets.length > 0) {
      pets = this.state.pets.map(pet => (
        <div key={pet.id}>{pet.id} {pet.name}
          <Link to={`pet/details/${pet.id}`}>More Details</Link>
        </div>
      ))
    }

    return (
      <div>
        <h1>All pets</h1>
        {pets}
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default ListPetsPage