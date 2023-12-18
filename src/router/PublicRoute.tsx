import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"

interface props {
    children: JSX.Element | JSX.Element[]
}

export const PublicRoute = ({ children }: props) => {

    const { SignIn } = useContext( AuthContext )
    if (SignIn != undefined) {
        if (SignIn.Logged)
        {
            console.log("Public Logged True");
            return <Navigate to="/Dashboard" />
        }
        else {
            console.log("Public Logged False");
            return children
        }
    }
    else
    {
        console.log("Public SignIn Undefine");
        return children
    }
    
}