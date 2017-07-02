import FakeData from './fakeData'

export default class Data {
  static getAllBooks () {
    return FakeData.Restaurants
  }

  static allAuthors () {
    return FakeData.Authors
  }
}
