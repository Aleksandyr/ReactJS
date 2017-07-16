class FormHelpers {
  static handleFormChange (event, stateField) {
    const target = event.target
    const field = target.name
    const value = target.value

    let state = this.state[stateField]
    typeof(state) === 'object' ?
      state[field] = value:
      state = value

    this.setState({ [stateField]: state })
  }

  static getFirstError (data) {
    let firstError = data.message
    if (data.errors) {
      firstError =
        Object.keys(data.errors).map(k => data.errors[k])[0]
    }
    
    return firstError
  }
}

export default FormHelpers
