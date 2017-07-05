import React, {Component} from 'react'
import Book from './Book'
import Data from '../data/dataMethods'

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }

    this.Data = new Data()

    this.allBooks = this.allBooks.bind(this)
    this.sortDescBooks = this.sortDescBooks.bind(this)
  }

  render () {
    // let getAllBooks = getAllBooks()
    // let sourceOfData = this.state.fatchedBooks.length !== 0 ? this.state.booksDescending : this.state.fatchedBooks
    let booksDescending = this.state.books
      .map(book => {
        return (
          <div key={book.id} className='col-sm-3'>
            <Book title={book.title} auhor={book.author} id={book.id} />
          </div>
        )
      })

    return (
      <div className='row'>
        {booksDescending}
      </div>
    )
  }

  componentDidMount () {
    this.props.sortType === 'desc' ? this.sortDescBooks() : this.allBooks()

    if (this.props.slicedTo) {
      this.setState({
        books: this.state.books.slice(0, Number.parseInt(this.props.slicedTo))
      })
    }
  }

  allBooks () {
    this.Data.getAllBooks()
      .then(books => {
        this.setState({
          books: books
        })
      })
  }

  sortDescBooks () {
    this.Data.getAllBooks()
      .then(books => {
        books.sort((a, b) => {
          return new Date(b.creationDate) - new Date(a.creationDate)
        })

        this.setState({
          books: books
        })
      })
  }
}

export default Books
