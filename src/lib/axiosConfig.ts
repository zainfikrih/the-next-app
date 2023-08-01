import axios from 'axios'
import https from 'https'
import { getAccessToken } from './cookiesManager'

const baseURL = process.env.NEST_API_URL

const accessToken = getAccessToken()

const axiosApp = axios.create({
    baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    headers: {
        Authorization: `Bearer ${getAccessToken}`
    }
})

axiosApp.interceptors.request.use(function (config) {
    console.log(`AXIOS REQUEST: ${JSON.stringify(config, null, 2)}`)
    return config
})

axiosApp.interceptors.response.use(
    response => {
        console.log("AXIOS RESPONSE:", `Res: ${JSON.stringify(response.data, null, 2)}`)
        console.log("AXIOS RESPONSE:", `Status: ${JSON.stringify(response.status, null, 2)}`)
        return (response)
    },
    error => {
        console.error(`AXIOS RESPONSE: ${JSON.stringify(error, null, 2)}`)
        return (error)
    }
)

export default axiosApp