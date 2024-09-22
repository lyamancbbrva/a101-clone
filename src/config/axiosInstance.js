import axios from "axios";
import configObj from "./config";
import { Cookies } from "react-cookie";
import { refreshToken } from "../api/api";

const url = `https://${configObj.base}`

const cook = new Cookies()

const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type" : "application/json"
    }

})

axiosInstance.interceptors.request.use(request => {
    const token =  cook.get('token')
    if (token) {
        request.headers['Authorization'] = `Baerer ${token}`
        
    }
    return request
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use(resp => resp,
        async error => {
            const originalRequest = error.config

            if (error.response && error.response.status == 400 && !originalRequest._retry) {
                originalRequest._retry = true
                
            }
            try {
                const refresh =  cook.get('refresh')
                const {data} = await axios.post(`${url}/auth/refresh-token`, {refreshToken:refresh})
                cook.set('refresh', data.refresh)
                cook.set('token', data.token)
                axiosInstance.defaults.headers.common['Authorization'] = `Baerer ${data.token}`
                return axiosInstance(originalRequest)
                
            } catch (error) {
                cook.remove('token')
                cook.remove('refresh')
                cook.remove('user')
                return Promise.reject(error)
                
            }
            return Promise.reject(error)
        }
)

export {axiosInstance}