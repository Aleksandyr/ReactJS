import React, { Component } from 'react'
import FormHelpers from '../common/forms/FormHelpers'
import CreateCarForm from './CreateCarForm'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import toastr from 'toastr'

class CreateCarPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      car: {
        make: 'Mercedes',
        model: 'S63',
        year: 2017,
        engine: 'powerful',
        price: 200000,
        image: 'https://mediaserver.mbusa.com/iris/iris?client=mb&brand=mbusa&resp=err_status%2Cjpeg&quality=90&vehicle=2017_s63c4&pov=e01%2Crt&paint=2_040&sa=0_654%2C9_p01&width=1440&height=600&w=6647&h=3998&x=1889&y=3200',
        mileage: 500
      },
      error: ''
    }

    this.handleCarCreation = this.handleCarCreation.bind(this)

    carStore.on(
      carStore.eventTypes.CAR_CREATION,
      this.handleCarCreation)
  }

  componentWillUnmount () {
    carStore.removeListener(
      carStore.eventTypes.CAR_CREATION,
      this.handleCarCreation)
  }

  handleCarChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'car')
  }

  handleCarForm (event) {
    event.preventDefault()

    carActions.create(this.state.car)
  }

  handleCarCreation (data) {
    if (!data.success) {
      const firstError = FormHelpers.getFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push('user/login')
    }
  }

  render () {
    return (
      <div>
        <h1>Register user page</h1>
        <CreateCarForm
          car={this.state.car}
          error={this.state.error}
          onChange={this.handleCarChange.bind(this)}
          onSave={this.handleCarForm.bind(this)} />
      </div>
    )
  }
}

export default CreateCarPage