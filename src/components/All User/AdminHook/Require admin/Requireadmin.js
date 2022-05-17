import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../Firebasekey/Firebasekey';
import Loader from '../../../Loading/Loader';
import UseAdmin from '../UseAdmin';



const Requireadmin = ({children}) => {

    const [user] = useAuthState(auth)
    const [admins, admincheckloading] = UseAdmin(user)
    const location = useLocation()

    if (admincheckloading) {
        return <Loader></Loader>
    }

    if (!admins) {
        signOut(auth)
        localStorage.removeItem("accesstoken")
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children
};

export default Requireadmin;