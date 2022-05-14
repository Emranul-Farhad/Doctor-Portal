import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebasekey/Firebasekey';
import Loader from '../Loading/Loader';





const Require = ({children}) => {

const [user, loading] = useAuthState(auth)
const location = useLocation()

if(loading){
    return <Loader></Loader>
}

if (!user) {
    return <Navigate to="/login" state={{ from: location}} replace />;
  }

    return children;
    
};

export default Require;