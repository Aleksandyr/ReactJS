import Data from './Data'

const baseUrl = 'cars'

class CarData {
  static getAll (page) {
    return Data.get(`${baseUrl}/all?page=${page}`)
  }

  static create (car) {
    return Data.post(`${baseUrl}/create`, car, true)
  }

  static getById (id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }

  static deleteCar (id) {
    return Data.post(`${baseUrl}/delete/${id}`, {}, true)
  }

  static carsSearch (searchQuery) {
    return Data.get(`${baseUrl}/all?search=${searchQuery}`)
  }

}

export default CarData
