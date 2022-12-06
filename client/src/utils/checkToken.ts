export const checkToken = ()=>{
    return Boolean(localStorage.getItem('token'))
}