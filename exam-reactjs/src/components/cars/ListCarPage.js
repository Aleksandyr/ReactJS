import React, { Component } from 'react'
import queryString from 'query-string'
import ListItemCar from './ListItemCar'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import Input from '../common/forms/Input'
import FormHelpres from '../common/forms/FormHelpers'

class ListCarPage extends Component {
  constructor (props) {
    super (props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1
    const search = query.search || ''

    this.state = {
      cars: [],
      page: page,
      search: search
    }

    this.handleCarsFetching = this.handleCarsFetching.bind(this)
    this.handleSearchedCars = this.handleSearchedCars.bind(this)

    carStore.on(
      carStore.eventTypes.ALL_CARS_FETCHED,
      this.handleCarsFetching
    )

    carStore.on(
      carStore.eventTypes.FETCHED_SERCHED_CARS,
      this.handleSearchedCars
    )
  }

  componentDidMount () {
    carActions.getAll(this.state.page)
  }

  componentWillUnmount () {
    carStore.removeListener(
      carStore.eventTypes.ALL_CARS_FETCHED,
      this.handleCarsFetching
    )

    carStore.removeListener(
      carStore.eventTypes.FETCHED_SERCHED_CARS,
      this.handleSearchedCars
    )
  }

  handleCarsFetching (data) {
    this.setState({
      cars: data
    })
  }

  goToPrevPage () {
    let page = this.state.page
    if (page === 1) {
      return
    }

    page--
    this.setState({ page })
    carActions.getAll(page)
    this.props.history.push(`/cars/all/?page=${page}`)
  }

  goToNextPage () {
    if (this.state.cars.length === 0) {
      return
    }

    let page = this.state.page
    page++

    this.setState({ page })

    carActions.getAll(page)
    this.props.history.push(`/cars/all/?page=${page}`)
  }

  handleSearchInput (event) {
    FormHelpres.handleFormChange.bind(this)(event, 'search')
  }

  handleSearchCar (event) {
    event.preventDefault()

    carActions.carsSearch(this.state.search)
    this.props.history.push(`/cars/all/?search=${this.state.search}`)
  }

  handleSearchedCars (data) {
    this.setState({
      cars: data
    })
  }

  render () {
    let cars = 'No available cars'
    if (this.state.cars.length > 0) {
      cars = this.state.cars.map(car => (
        <ListItemCar key={car.id} car={car} />
      ))
    }

    return (
      <div>
        <div className='search'>
          <Input 
            name='search'
            placeholder='Search'
            value={this.state.search}
            onChange={this.handleSearchInput.bind(this)}/>
          
          <button onClick={this.handleSearchCar.bind(this)}>Search</button>
        </div>
        <div className='cars_list'>
          {cars}
          <div>
            <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
            <button onClick={this.goToNextPage.bind(this)}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListCarPage