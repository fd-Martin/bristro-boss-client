import React, { useContext } from 'react';
import { AuthContext } from '../Prodiver/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (user) {
        return children;
    }
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
        ;
};

export default PrivateRoute;