import React, { Component } from 'react'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import CarDetails from './CarDetails'

class ListCarPage extends Component {
  constructor (props) {
    super (props)

    let carId = parseInt(this.props.match.params.id, 10);

    this.state = {
      car: [],
      id: carId
    }

    this.handleCarFetching = this.handleCarFetching.bind(this)

    carStore.on(
      carStore.eventTypes.CAR_FETCHED,
      this.handleCarFetching
    )
  }

  componentDidMount () {
    carActions.getById(this.state.id)
  }

  componentWillUnmount () {
    carStore.removeListener(
      carStore.eventTypes.CAR_FETCHED,
      this.handleCarFetching
    )
  }

  handleCarFetching (data) {
    this.setState({
      car: data
    })
  }

  render () {
    return (
      <div className>
        <CarDetails car={this.state.car} />
      </div>
    )
  }
}

export default ListCarPage