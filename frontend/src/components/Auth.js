import React from "react";
import { useLocation, Navigate } from "react-router-dom"

export const setToken = (token) => {
    localStorage.setItem('gtoken', token)// make up your own token
}

export const fetchToken = (token) => {
    return localStorage.getItem('gtoken')
}

export function RequireToken({ children }) {

    let auth = fetchToken()
    let location = useLocation()

    if (!auth) {
        return <Navigate to='/' state={{ from: location }} />;
    }
    return children;
}

