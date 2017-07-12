class Auth {
  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }

  static isUserAuthenticated (token) {
    return window.localStorage.getItem('token') !== null
  }

  static deauthenticateUser (token) {
    window.localStorage.removeItem('token')
  }

  static getToken (token) {
    return window.localStorage.getItem('token')
  } 
}