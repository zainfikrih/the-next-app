import axios from 'axios'
import https from 'https'

const baseURL = process.env.NEST_API_URL

const axiosApp = axios.create({
    baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export default axiosApp