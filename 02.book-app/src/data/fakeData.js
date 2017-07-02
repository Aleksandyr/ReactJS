import Restaurant from '../models/Resaurant'
import Comment from '../models/Comment'
import Author from '../models/Author'

class FakeData {
  static Authors () {
    return [
      new Author(0, 'pesho', 'some img'),
      new Author(1, 'tosho', 'some img'),
      new Author(2, 'gosho', 'some img')
    ]
  }

  static Restaurants () {
    return [
      new Restaurant(0, 'first', 'some desc', this.Authors[0], 'http:\\unknown.com', 20, null),
      new Restaurant(1, 'second', 'some desc', this.Authors[1], 'http:\\unknown.com', 22,
        [
          new Comment(0, 'some comment1'),
          new Comment(1, 'some comment2')
        ]),
      new Restaurant(2, 'third', 'some desc', this.Authors[2], 'http:\\unknown.com', 24,
        [
          new Comment(0, 'some other comment1'),
          new Comment(1, 'some other comment2')
        ])
    ]
  }
}

export default FakeData
