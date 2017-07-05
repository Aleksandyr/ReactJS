import FakeData from './fakeData'
// import Book from '../models/Book'
// import Comment from '../models/Comment'
// import Author from '../models/Author'

class data {
  constructor () {
    this.fakeData = new FakeData()
  }

  getAllBooks () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.fakeData.getAllBooks())
      }, 1000)
    })
  }

  getAllAuthors () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.fakeData.getAllAuthors())
      }, 1000)
    })
  }

  componentDidMount () {
    this.fakeData = this.fakeData.bind(this)
  }
}

export default data
