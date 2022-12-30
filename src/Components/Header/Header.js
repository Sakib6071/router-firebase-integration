import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app)
const Header = () => {
    const [user]=useAuthState(auth)
    const [signOut]=useSignOut(auth)
    return (
        <div className=' bg-purple-700 py-4'>
            <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/'}>Home</Link>
            <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/products'}>Products</Link>
            <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/orders'}>Orders</Link>
            
            {
                user?.uid?(<Link onClick={()=>signOut()} className='text-white text-xl font-semibold hover:text-yellow-500 mx-2'>Logout</Link>):(<><Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/register'}>Register</Link>
                <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/login'}>Login</Link></>)
            }
            <span className='text-yellow-500 ml-5'>{user?.displayName && user.displayName}</span>
        </div>
    );
};

export default Header;