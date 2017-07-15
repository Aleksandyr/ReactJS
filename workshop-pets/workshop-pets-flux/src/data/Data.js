const baseUrl = 'http://localhost:5000/'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonReponse = res => res.json()

class Data {
  static post(url, data) {
    const options = getOptions();
    options.method = 'POST'
    options.body = JSON.stringify(data)

    return window.fetch(
      `${baseUrl}${url}`,
      options
    ).then(handleJsonReponse)
  }

  static get(url) {
    const options = getOptions()
    options.method = 'GET'

    return window.fetch(
      `${baseUrl}${url}`,
      options
    ).then(handleJsonReponse)
  }
}

export default Data
