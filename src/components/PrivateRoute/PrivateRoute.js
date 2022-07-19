import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        { ...rest},
        user.email ? children : <Navigate to='/login'/>

        // <div
        // { ...rest}

        // render={({location}) => user.email ? children :
        // <Navigate to='/login' />
        // // <Navigate>
        // //     to={{
        // //         pathname: '/login',
        // //         state: { from: location }
        // //     }}
        // // </Navigate>
        // }
        
        // >
            
            

        // </div>
    );
};

export default PrivateRoute;