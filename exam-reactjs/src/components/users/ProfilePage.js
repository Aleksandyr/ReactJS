import React, { Component } from 'react'
import toastr from 'toastr'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import ListItemCar from '../cars/ListItemCar'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import FormHelpers from '../common/forms/FormHelpers'

class ProfilePage extends Component {
  constructor (props) {
    super (props)

    // let carId = parseInt(this.props.match.params.id, 10);

    this.state = {
      myCars: [],
      error: ''
    }

    this.handleMyFetchedCars = this.handleMyFetchedCars.bind(this)
    this.handleDeletedCar = this.handleDeletedCar.bind(this)

    userStore.on(
      userStore.eventTypes.MY_CARS_FETCHED,
      this.handleMyFetchedCars
    )

    carStore.on(
      carStore.eventTypes.DELETED_CAR,
      this.handleDeletedCar
    )
  }

  componentDidMount () {
    userActions.myCars()
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.MY_CARS_FETCHED,
      this.handleMyFetchedCars
    )
    userStore.removeListener(
      userStore.eventTypes.DELETED_CAR,
      this.handleDeletedCar
    )
  }

  handleMyFetchedCars (data) {
    this.setState({
      myCars: data
    })
  }

  deleteCar (car) {
    if (car) {
      carActions.deleteCar(car.id)
    }
  }

  handleDeletedCar (data) {
    if (!data.success) {
      const firstError = FormHelpers.getFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      userActions.myCars()
    }
  }

  render () {
    let cars = 'No available pets'
    if (this.state.myCars.length > 0) {
      cars = this.state.myCars.map(car => (
        <div key={car.id}>
          <ListItemCar car={car} />
          <div>
            <button onClick={this.deleteCar.bind(this, car)}>Delete</button>
          </div>
        </div>
      ))
    }

    return (
      <div className='cars_list'>
        {cars}
      </div>
    )
  }
}

export default ProfilePage