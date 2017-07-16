import dispatcher from '../dispatcher'

const petActions = {
  types: {
    ADD_PET: 'ADD_PET',
    ALL_PETS: 'ALL_PETS'
  },

  all (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL_PETS,
      page
    })
  },

  addPet (pet) {
    dispatcher.dispatch({
      type: this.types.ADD_PET,
      pet
    })
  }
}

export default petActions
