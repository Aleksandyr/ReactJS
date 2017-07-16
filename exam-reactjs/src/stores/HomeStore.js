import { EventEmitter } from 'events'
import dispatcher from '../dispatcher' 
import homeActions from '../actions/HomeActions'
import HomeData from '../data/HomeData'

class HomeStore extends EventEmitter {
  getStatistics () {
    HomeData
      .getStatistics()
      .then(data => this.emit(this.eventTypes.FETCHED_STATISTICS, data))

  }

  handleAction (action) {
    switch (action.type) {
      case homeActions.types.STATISTICS: {
        this.getStatistics()
        break
      }
      default: break
    }
  }
}

let homeStore = new HomeStore()

homeStore.eventTypes = {
  FETCHED_STATISTICS: 'fetched_statistics'
}

dispatcher.register(homeStore.handleAction.bind(homeStore))
export default homeStore