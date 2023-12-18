import { createContext } from "react";
import { ISignIn } from "../interface/ISingInState";

export type AuthContextProps = {
    SignIn: ISignIn;
    FNLogin: (alias: string) => void;
    FNLogout: () => void;
}

export const AuthContext =  createContext<AuthContextProps>({} as AuthContextProps)