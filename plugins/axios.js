export default function ({ $axios, redirect }, inject) {
  $axios.onRequest((config) => {
    config.headers['Content-type'] = 'application/json; charset=utf-8'
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD'
    config.headers['Access-Control-Allow-Headers'] = 'Content-type'
  }, (error) => {
    return Promise.reject(error)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    }
  })
}
