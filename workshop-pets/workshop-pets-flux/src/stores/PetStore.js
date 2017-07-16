import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import petActions from '../actions/PetActions'
import PetData from '../data/PetData'

class PetStore extends EventEmitter {
  all (page) {
    page = page || 1
  }
  addPet (pet) {
    PetData
      .addPet(pet)
      .then(data => this.emit(this.eventTypes.ADD_PET, data))
  }

  handleAction (action) {
    switch(action.type) {
      case petActions.types.ADD_PET: {
        this.addPet(action.pet)
        break
      }
      default: break
    }
  }
}

let petStore = new PetStore()

petStore.eventTypes = {
  ADD_PET: 'add_pet'
}

dispatcher.register(petStore.handleAction.bind(petStore))
export default petStore
