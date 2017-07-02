class Author {
  constructor (id, name, image) {
    this._id = id
    this._name = name
    this._image = image
  }

  get id () {
    return this._id
  }

  set id (id) {
    this.id = id
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get image () {
    return this._image
  }

  set image (image) {
    this._image = image
  }
}

export default Author
