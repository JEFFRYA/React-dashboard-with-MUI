import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { ISignIn } from "../interface/ISingInState";

const INITIAL_STATE: ISignIn = {
    Logged: false,
    Alias: "",
    Role: ""
}

const init = () => {
    try {
        const signIn = JSON.parse(localStorage.getItem("signIn") || "");
        return signIn
    }
    catch (error) {
        return undefined;
    }
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: props) => {

    const [SignIn, dispatch] = useReducer(AuthReducer, INITIAL_STATE, init);
    const FNLogin = (alias = "") => {

        const login: ISignIn = {
            Logged: false,
            Alias: alias,
            Role: ""
        }

        let logged = true;

        if (logged) {
            login.Logged = true;
            login.Role = "Administrador";
            localStorage.setItem("signIn", JSON.stringify(login));
            dispatch({ type: "Success", payload: login });
        }
        else {
            dispatch({ type: "Failure", payload: login });
        }
    }
    const FNLogout = () => {
        localStorage.removeItem("signIn");
        const logout: ISignIn = {
            Logged: false,
            Alias: "",
            Role: ""
        }

        dispatch({ type: "Failure", payload: logout });
    }

    return (
        <AuthContext.Provider value={{
            SignIn,

            //Methods
            FNLogin,
            FNLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
}