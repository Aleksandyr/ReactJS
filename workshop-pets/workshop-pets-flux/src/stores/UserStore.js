import { EventEmitter } from 'events'
import dispatcher from '../dispatcher' 
import userActions from '../actions/UserActions'

class UserStore extends EventEmitter {
  register (user) {

  }

  handleAction (action) {
    switch (action.type) {
      case userActions.types.REGISTER_USER: {
        this.register(action.user)
        break
      }
      default: break
    }
  }
}

let userStore = new UserStore()
dispatcher.register(UserStore.handleAction(userStore))
export default UserStore