import fakeData from '/.fakeData'

const data = {
  getAllBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fakeData.getAllBooks()
      }, 1000)
    })
  },

  getAllAuthors: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fakeData.getAllAuthors()
      }, 1000)
    })
  }
}

export default data
