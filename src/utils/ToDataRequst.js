import axios from 'axios'

const Myrequst = {}

Myrequst.get = function(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    method: 'get',
    timeout: 5000

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}

export default Myrequst
