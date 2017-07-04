import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Book extends Component {
  render () {
    let bookId = this.props.id

    return (
      <div className='book d-inline-block bg-warning'>
        <h3>{this.props.title}</h3>
        <div>{this.props.auhor.name}</div>
        <Link to={'book/details/' + bookId}>Details</Link>
      </div>
    )
  }
}
