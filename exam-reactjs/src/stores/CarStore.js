import { EventEmitter } from 'events'
import dispatcher from '../dispatcher' 
import carActions from '../actions/CarActions'
import CarData from '../data/CarData'

class CarStore extends EventEmitter {
  create (car) {
    CarData
      .create(car)
      .then(data => this.emit(this.eventTypes.CAR_CREATION, data))

  }

  getAll (page) {
    page = page || 1
    CarData
      .getAll (page)
      .then(data => this.emit(this.eventTypes.ALL_CARS_FETCHED, data))
  }

  getById (id) {
    CarData
      .getById (id)
      .then(data => this.emit(this.eventTypes.CAR_FETCHED, data))
  }

  deleteCar (id) {
    CarData
      .deleteCar (id)
      .then(data => this.emit(this.eventTypes.DELETED_CAR, data))
  }

  carsSearch (searchQuery) {
    CarData
      .carsSearch (searchQuery)
      .then(data => this.emit(this.eventTypes.FETCHED_SERCHED_CARS, data))
  }

  handleAction (action) {
    switch (action.type) {
      case carActions.types.CREATE_CAR: {
        this.create(action.car)
        break
      }
      case carActions.types.GET_ALL_CARS: {
        this.getAll(action.page)
        break
      }
      case carActions.types.GET_CAR_BY_ID: {
        this.getById(action.id)
        break
      }
      case carActions.types.DELETE_CAR: {
        this.deleteCar(action.id)
        break
      }
      case carActions.types.SEARCH_CARS: {
        this.carsSearch(action.searchQuery)
        break
      }
      default: break
    }
  }
}

let carStore = new CarStore()

carStore.eventTypes = {
  CAR_CREATION: 'car_creation',
  ALL_CARS_FETCHED: 'all_cars_fetched',
  CAR_FETCHED: 'car_by_id',
  DELETED_CAR: 'deleted_car',
  FETCHED_SERCHED_CARS: 'fetched_searched-cars'
}

dispatcher.register(carStore.handleAction.bind(carStore))
export default carStore