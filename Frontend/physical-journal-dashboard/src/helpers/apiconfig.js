import axios from 'axios'

const axios_instance = axios.create({
    // baseURL: process.env.REACT_APP_API_HOST,
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 10000
  })

export default axios_instance;
