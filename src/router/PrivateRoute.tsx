import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"

interface props {
    children: JSX.Element | JSX.Element[]
}

export const PrivateRoute = ({ children }: props) => {
    const { SignIn } = useContext( AuthContext )
    if (SignIn != undefined) {

        if (SignIn.Logged) {
            console.log("Private Logged True");
            return children
        }
        else {
            console.log("Private Logged False");
            return <Navigate to="/Login" />
        }
    }
    else {
        console.log("Private SignIn Undefined");
        return <Navigate to="/Login" />
    }
}