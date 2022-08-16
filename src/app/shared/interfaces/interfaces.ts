export interface IUserLogin {
    email: string,
    password: string
}

export interface IUserRegister {
    email: string,
    password: string,
    userName: string
}

export interface ITokenUser {
    token: string
}