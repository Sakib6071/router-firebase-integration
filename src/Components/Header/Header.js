import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-purple-700 py-4'>
            <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/'}>Home</Link>
            <Link className='text-white text-xl font-semibold hover:text-yellow-500 mx-2' to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;