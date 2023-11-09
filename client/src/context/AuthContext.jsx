import { useReducer, createContext} from "react";
import { authReducer } from "../reducers/authReducers";

export const AuthContext = createContext(null);

export const AuthUser = ({children}) => {
    const [user, dispatchUser] = useReducer(authReducer)

    return (
        <AuthContext.Provider value = {{
            user, 
            dispatchUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
