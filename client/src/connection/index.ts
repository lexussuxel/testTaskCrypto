import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})




export {
    $host, $authHost
}