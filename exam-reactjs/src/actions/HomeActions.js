import dispatcher from '../dispatcher'

const homeActions = {
  types: {
    STATISTICS: 'STATISTICS'
  },

  getStatistics () {
    dispatcher.dispatch({
      type: this.types.STATISTICS,
    })
  }
}

export default homeActions
