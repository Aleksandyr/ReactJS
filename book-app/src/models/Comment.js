class Comment {
  constructor (id, commentText, image) {
    this._id = id
    this._commentText = commentText
  }

  get id () {
    return this._id
  }

  set id (id) {
    this.id = id
  }

  get commentText () {
    return this._commentText
  }

  set commentText (commentText) {
    this._commentText = commentText
  }
}

export default Comment
