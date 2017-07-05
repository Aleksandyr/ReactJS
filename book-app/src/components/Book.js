import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Book extends Component {
  render () {
    let bookId = this.props.id

    return (
      <div className='book card'>
        <div className='card-block'>
          <h4 className='card-title'>{this.props.title}</h4>
          <div className='card-text'>{this.props.auhor.name}</div>
          <Link to={'book/details/' + bookId} className='btn btn-primary'>Details</Link>
        </div>
      </div>
    )
  }
}
