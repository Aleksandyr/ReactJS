import React, {Component} from 'react'

class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'>
                <strong>Information</strong> and
                <strong> Copyright</strong>
              </h3>
              <p>
                Powered by
                <strong> React</strong>
              </p>
              <p>Ⓒ 2017.</p>
            </div>
            <div className='col-sm-4 hiddne-xs'>
              <h3 className='lead'>
                <strong>Newest</strong> 5 Books
              </h3>
            </div>
            <div className='col-sm-3'>
              <h3 className='lead'>Author</h3>
              <a href='https://github.com/Aleksandyr'>
                <strong> Aleksandar Kamenov</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
