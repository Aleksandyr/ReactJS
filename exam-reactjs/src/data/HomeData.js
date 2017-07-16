import Data from './Data'

class HomeData {
  static getStatistics () {
    return Data.get('stats')
  }
}

export default HomeData