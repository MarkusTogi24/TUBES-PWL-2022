import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}

// const fakeAuth = {
//     isAuthenticated: false,
//     signin(cb) {
//         fakeAuth.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//         fakeAuth.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };


// function ProvideAuth({ children }) {
//     const auth = useProvideAuth();
//     return (
//         <authContext.Provider value={auth}>
//             {children}
//         </authContext.Provider>
//     );
// }

// function useAuth() {
//     return useContext(authContext);
// }
