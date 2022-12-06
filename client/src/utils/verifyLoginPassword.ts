export const verifyPassword = (password: string) => {
    if (password.length < 5 || password.length > 20){
        return false
    }
    return true
}

export const verifyLogin = (login: string) => {
    return login.includes('@')
}