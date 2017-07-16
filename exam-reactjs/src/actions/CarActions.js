import dispatcher from '../dispatcher'

const carActions = {
  types: {
    CREATE_CAR: 'CREATE_CAR',
    GET_ALL_CARS: 'GET_ALL_CARS',
    GET_CAR_BY_ID: 'GET_CAR_BY_ID',
    DELETE_CAR: 'DELETE_CAR',
    SEARCH_CARS: 'SEARCH_CARS'
  },

  create (car) {
    dispatcher.dispatch({
      type: this.types.CREATE_CAR,
      car
    })
  },

  getAll (page) {
    page = page || 1
    dispatcher.dispatch({
      type:this.types.GET_ALL_CARS,
      page
    })
  },
  
  getById (id) {
    dispatcher.dispatch({
      type: this.types.GET_CAR_BY_ID,
      id
    })
  },

  deleteCar (id) {
    dispatcher.dispatch({
      type: this.types.DELETE_CAR,
      id
    })
  },

  carsSearch (searchQuery) {
    dispatcher.dispatch({
      type: this.types.SEARCH_CARS,
      searchQuery
    })
  }
}

export default carActions
