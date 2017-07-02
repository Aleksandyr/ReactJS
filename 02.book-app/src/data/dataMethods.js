import FakeData from './fakeData'

export default class Data {
  static getAllRestaurants () {
    return FakeData.Restaurants
  }

  static allAuthors () {
    return FakeData.Authors
  }
}
