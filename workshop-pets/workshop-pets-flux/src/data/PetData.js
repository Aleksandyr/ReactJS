import Data from './Data'

const baseUrl = 'pets'

class PetData {
  static addPet (pet) {
    return Data.post(`${baseUrl}/create`, pet, true)
  }
}

export default PetData
