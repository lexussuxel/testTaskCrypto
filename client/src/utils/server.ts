import {$host, $authHost} from "../connection";
import jwtDecode from "jwt-decode";
import {useAppSelector} from "../hooks/useTypedSelector";

export const registration = async (email:string, password:string, role?:string)=>{
    const {data} = await $host.post('user/registration', {email, password, role: role || 'user'})
    if (!data.token){
        return data.message
    }
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email:string, password:string)=>{
    const {data} = await $host.post('user/login', {email, password})
    if (!data.token){
        return data.message
    }
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const getAllUsers = async ()=>{
    const {data} = await $authHost.get('user/users')
    return data
}

export const getAllTransactions = async ()=>{
    const {id} = useAppSelector((state)=>state.user)
    const {data} = await $authHost.get(`user/transactions/${id}`)
    return data
}

export const addToWallet = async (currencyId: string, count: string) =>{
    const {data} = await $authHost.post('user/add', {id: currencyId, count})
}

export const changeRole = async (userId:string, role:string) => {
    const {data} = await $authHost.put('user/changerole', {userId, role})
}