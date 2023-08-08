import React from 'react'
import { Navigate } from 'react-router-dom'


const AuthGuard = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated')





    if (isAuthenticated === 'true') {
        return (
            <div>{children}</div>
        )
    }
    else {
        return <Navigate to={"/auth/login"} />
    }

}

export default AuthGuard