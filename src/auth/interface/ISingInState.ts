export interface ISignInState {
    SignIn: ISignIn
}

export interface ISignIn {
    Logged: boolean,
    Alias: string,
    Role: string
}