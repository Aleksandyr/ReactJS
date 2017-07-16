import React, { Component } from 'react'
import StatisticsPage from './StatisticsPage'
import homeActions from '../../actions/HomeActions'
import homeStore from '../../stores/HomeStore'

class HomePage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      users: 0,
      cars: 0
    }

    this.handleStatistics = this.handleStatistics.bind(this)
    homeStore.on(
      homeStore.eventTypes.FETCHED_STATISTICS,
      this.handleStatistics
    )
  }

  componentWillUnmount () {
    homeStore.removeListener(
      homeStore.eventTypes.FETCHED_STATISTICS,
      this.handleStatistics
    )
  }

  componentDidMount () {
    homeActions.getStatistics()
  }

  handleStatistics (data) {
    this.setState({
      users: data.users,
      cars: data.cars
    })
  }

  render () {
    return (
      <div>
        <div className='statistics_page'>
          <h3>Statistics!</h3>
           <StatisticsPage users={this.state.users} cars={this.state.cars} /> 
        </div>
      </div>
    )
  }
}

export default HomePage