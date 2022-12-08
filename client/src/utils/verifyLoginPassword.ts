export const verifyPassword = (password: string) => {
    //проверка длины пароля. Он должен быть больше 5 символов и меньше 20 символов
    if (password.length < 5 || password.length > 20){
        return false
    }
    return true
}

export const verifyLogin = (login: string) => {
    //логин обязательно должен содержать символ @
    return login.includes('@')
}