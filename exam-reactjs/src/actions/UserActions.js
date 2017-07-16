import dispatcher from '../dispatcher'

const userActions = {
  types: {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    MY_CARS: 'MY_CARS'
  },

  register (user) {
    dispatcher.dispatch({
      type: this.types.REGISTER_USER,
      user
    })
  },
  login (user) {
    dispatcher.dispatch({
      type: this.types.LOGIN_USER,
      user
    })
  },
  myCars () {
    dispatcher.dispatch({
      type: this.types.MY_CARS
    })
  }
}

export default userActions