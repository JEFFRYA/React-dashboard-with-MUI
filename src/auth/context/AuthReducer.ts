import { ISignIn } from "../interface/ISingInState"

type AuthAction = 
    | { type: "Success", payload: ISignIn }
    | { type: "Failure", payload: ISignIn }

export const AuthReducer = ( state: ISignIn, action: AuthAction ): ISignIn => {

    switch ( action.type ) {
        case "Success":
            
            return {
                ...state,
                Logged: action.payload.Logged,
                Alias: action.payload.Alias,
                Role: action.payload.Role
            };
        
        case "Failure":

            return {
                ...state,
                Logged: action.payload.Logged
            };

        default:

            return state;
    }
}