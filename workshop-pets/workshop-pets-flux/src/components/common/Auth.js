class Auth {
  static saveUser (user) {
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  static getUser () {
    const userJson = window.localStorage.getItem('user')
    return JSON.parse(userJson)
  }

  static removeUser () {
    window.localStorage.removeItem('user') 
  }

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

export default Auth
