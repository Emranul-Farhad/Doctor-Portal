import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">                   
                        <li> <NavLink to='/aa'> Home</NavLink>  </li>
                        <li> <NavLink to='/products'> Home</NavLink> </li>
                        <li> <NavLink to='/' > Appoinment </NavLink> </li>
                        <li> <NavLink to='/' > Reviews </NavLink> </li>
                        <li> <NavLink to='/' > Contact us </NavLink></li>
                        <li> <NavLink to='/' > login </NavLink> </li>
                        <li> <NavLink to='/' >Item 3</NavLink> </li>
                        </ul>
                    </div>

                    <a class="btn btn-ghost normal-case text-4xl"> daisyUI </a>

                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink to='/'> Home</NavLink></li>
                        <li> <NavLink to='/about' > About </NavLink></li>
                        <li> <NavLink to='/' > Appoinment </NavLink></li>
                        <li> <NavLink to='/' > Reviews </NavLink></li>
                        <li> <NavLink to='/' > Contact us </NavLink></li>
                        <li> <NavLink to='/' > login </NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;