import React, {Component} from 'react'
import Books from './Books'

class Home extends Component {
  render () {
    return (
      <div>
        <Books slicedTo='6' sortType='desc' />
      </div>
    )
  }
}

export default Home
