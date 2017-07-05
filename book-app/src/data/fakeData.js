import Book from '../models/Book'
import Comment from '../models/Comment'
import Author from '../models/Author'

class FakeData {
  getAllAuthors () {
    return ([
      new Author(0, 'pesho', 'some img'),
      new Author(1, 'tosho', 'some img'),
      new Author(2, 'gosho', 'some img')
    ])
  }

  getAllBooks () {
    return [
      new Book(0, 'first', 'some desc', this.getAllAuthors()[0], 'http:\\unknown.com', 20, '2015/07/20', null),
      new Book(1, 'second', 'some desc', this.getAllAuthors()[1], 'http:\\unknown.com', 22, '2016/07/20',
        [
          new Comment(0, 'some comment1'),
          new Comment(1, 'some comment2')
        ]),
      new Book(2, 'third', 'some desc', this.getAllAuthors()[2], 'http:\\unknown.com', 24, '2017/07/20',
        [
          new Comment(0, 'some other comment1'),
          new Comment(1, 'some other comment2')
        ])
    ]
  }
}

export default FakeData
