import axios from 'axios'
import https from 'https'

const baseURL = 'https://dummyjson.com'

const axiosApp = axios.create({
    baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export default axiosApp