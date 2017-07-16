import Data from './Data'

const baseUrl = 'pets'

class PetData {
  static all (page) {
    return Data.get(`${baseUrl}/all?page=${page}`)
  }

  static addPet (pet) {
    return Data.post(`${baseUrl}/create`, pet, true)
  }
}

export default PetData
