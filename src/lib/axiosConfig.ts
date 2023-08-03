import axios from 'axios'
import https from 'https'
import { getAccessToken } from './cookiesManager'

const baseURL = process.env.NEST_API_URL

const axiosApp = axios.create({
    baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

axiosApp.interceptors.request.use(function (config) {
    const token = getAccessToken()
    config.headers.Authorization = `Bearer ${token}`
    const logme = { ...config.headers, data: config.data, method: config.method, url: config.url }
    console.log('AXIOS REQUEST:', `${JSON.stringify(logme, null, 2)}`)
    return config
})

axiosApp.interceptors.response.use(
    response => {
        const logme = { url: response.config.url, data: response.data, status: response.status }
        console.log("AXIOS RESPONSE:", `${JSON.stringify(logme, null, 2)}`)
        return (response)
    },
    error => {
        console.error('AXIOS RESPONSE ERROR:', `${JSON.stringify(error, null, 2)}`)
        return (error)
    }
)

export default axiosApp