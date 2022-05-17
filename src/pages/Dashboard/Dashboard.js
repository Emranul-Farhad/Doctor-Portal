import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../../components/All User/AdminHook/UseAdmin';
import auth from '../../Firebasekey/Firebasekey';
import Nav from '../../sharedcomponents/Nav bar/Nav';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admins] = UseAdmin(user)
    return (
        <div>
            <Nav></Nav>
            <div class="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>        
                    {/* nested routeds content */}
                </div>
                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard"> My Dashboard </Link></li>                     
                    <li><Link to="/dashboard/myhistory"> My History </Link></li>                     
                    { admins && <li><Link to="/dashboard/Users"> Users</Link></li>   }                  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;