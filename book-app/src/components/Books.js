import React, {Component} from 'react'
import Book from './Book'
import Data from '../data/dataMethods'

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      booksDescending: []
    }

    this.getSixBooksDescending = this.getSixBooksDescending.bind(this)
  }

  render () {
    // let getAllBooks = getAllBooks()
    let booksDescending = this.state.booksDescending.slice(0, 6).map(book => {
      return (
        <div key={book.id}>
          <Book title={book.title} auhor={book.author} id={book.id} />
        </div>
      )
    })

    return (
      <div>
        {booksDescending}
      </div>
    )
  }

  componentDidMount () {
    this.getSixBooksDescending()
  }

  getSixBooksDescending () {
    Data.getAllBooks()
      .then(books => {
        books.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date)
        })

        this.setState({
          booksDescending: books
        })
      })
  }
}

export default Books
