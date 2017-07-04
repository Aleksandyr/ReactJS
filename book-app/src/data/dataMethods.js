import Book from '../models/Book'
import Comment from '../models/Comment'
import Author from '../models/Author'

const data = {
  getAllBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          new Book(0, 'first', 'some desc', new Author(0, 'pesho', 'some img'), 'http:\\unknown.com', 20, '20/07/2015', null),
          new Book(1, 'second', 'some desc', new Author(0, 'gosho', 'some img'), 'http:\\unknown.com', 22, '20/07/2016',
            [
              new Comment(0, 'some comment1'),
              new Comment(1, 'some comment2')
            ]),
          new Book(2, 'third', 'some desc', new Author(0, 'tosho', 'some img'), 'http:\\unknown.com', 24, '20/07/2017',
            [
              new Comment(0, 'some other comment1'),
              new Comment(1, 'some other comment2')
            ])
        ])
      }, 1000)
    })
  },

  getAllAuthors: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          new Author(0, 'pesho', 'some img'),
          new Author(1, 'tosho', 'some img'),
          new Author(2, 'gosho', 'some img')
        ])
      }, 1000)
    })
  }
}

export default data
