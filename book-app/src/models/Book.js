class Book {
  constructor (id, title, description, author, image, price, creationDate, comments) {
    this._id = id
    this._title = title
    this._description = description
    this._author = author
    this._image = image
    this._price = price
    this._comments = comments
    this._creationDate = creationDate
  }

  get id () {
    return this._id
  }

  set id (id) {
    this.id = id
  }

  get title () {
    return this._title
  }

  set title (title) {
    this._title = title
  }

  get description () {
    return this._description
  }

  set description (description) {
    this._description = description
  }

  get author () {
    return this._author
  }

  set author (author) {
    this._author = author
  }

  get image () {
    return this._image
  }

  set image (image) {
    this._image = image
  }

  get price () {
    return this._price
  }

  set price (price) {
    this._price = price
  }

  get creationDate () {
    return this._creationDate
  }

  set creationDate (creationDate) {
    this._creationDate = creationDate
  }

  get comments () {
    return this._comments
  }

  set comments (comments) {
    this._comments = comments
  }
}

export default Book
