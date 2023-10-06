import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInfo = {name: 'nodi sagor khal bill'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}

/***
 * 1. Create Context and export it 
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component  aas children and use in the middle of the provider
 * ***/ 