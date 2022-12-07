import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API
})

const authInterceptor = (config:any) =>{
    console.log(localStorage.getItem('token'))
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host, $authHost
}