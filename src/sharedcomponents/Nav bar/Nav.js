import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../Firebasekey/Firebasekey';



const Nav = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navlinks = <>
        <li> <NavLink className="text-accent font-bold" to='/'> Home</NavLink> </li>
        <li> <NavLink className="text-accent font-bold" to='/appoinment'> Appoinment </NavLink> </li>
        <li> <NavLink className="text-accent font-bold" to='/Reviews' > Reviews </NavLink> </li>
        <li> <NavLink className="text-accent font-bold" to='/Contact us' > Contact us </NavLink></li>
        <li> <NavLink className="text-accent font-bold mr-1" to='/dashboard' > Dashboard </NavLink></li>
        <li>{user ? <button onClick={logout} class="btn btn-outline btn-error mx-1">Logout</button> : <NavLink className="text-accent font-bold" to='/login'> login </NavLink>}</li>
    </>

    return (
        <div className='pt-6'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>

                    {/* nav bar logo */}
                    <a class="btn btn-ghost normal-case text-4xl"> Human Repair </a>
                    {/* nav bar logo */}

                </div>
                <div class=" hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 bg-base-500 ">
                        {navlinks}
                    </ul>
                </div>

                <div className='navbar-end lg:hidden'>
                <label for="dashboard" tabindex="1" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>               
                </div>
            </div>
        </div>
    );
};

export default Nav;

