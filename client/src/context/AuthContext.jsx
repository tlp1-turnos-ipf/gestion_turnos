import { useReducer, createContext} from "react";
import { authReducer } from "../reducers/authReducers";

export const AuthContext = createContext(null);

export const AuthUser = ({children}) => {
    const [auth, dispatchAuth] = useReducer(authReducer, { isLogged: false })

    return (
        <AuthContext.Provider value = {{
            auth, 
            dispatchAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}
