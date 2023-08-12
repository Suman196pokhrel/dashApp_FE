import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const AuthGuard = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated')
    let { pathname } = useLocation()
    pathname = pathname.substring(1, 5)
    console.log(pathname)






    if (pathname === 'auth' && isAuthenticated !== 'true') {
        return <>{children}</>
    }
    else if (pathname === 'auth' && isAuthenticated === 'true') {
        return <Navigate to={"/dashboard/app"} />
    }
    else if (pathname !== 'auth' && isAuthenticated === 'true') {
        return <>{children}</>
    }
    else if (pathname !== 'auth' && isAuthenticated !== 'true') {
        return <Navigate to={"/auth/login"} />
    }

}

export default AuthGuard