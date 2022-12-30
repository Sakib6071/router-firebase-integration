import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <p>Knock Knock, who is there?</p>
             <p>Current User : {user?.displayName?user.displayName:'No Body'}</p>
        </div>
    );
};

export default Products;