import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../Firebasekey/Firebasekey';
import Nav from '../../sharedcomponents/Nav bar/Nav';





const Myappoinments = () => {

    const [pattinetdata, setPattientdata] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    //    show order pattient wise

    useEffect(() => {
        fetch(`http://localhost:8000/appoinment?appoinmentpattientemail=${user?.email}`, {
            "method": "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
            // pass jwt toke in server side 
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                    localStorage.removeItem("accesstoken")
                }
                return res.json()
            })
            .then(data => setPattientdata(data))
    }, [user, navigate])



    return (
        <div>
            <h1 className='text-secondary text-3xl font-bold'> welcome Your Dashboard </h1>
            <p className='text-1xl font-bold mb-5 mt-4'>Your order is {pattinetdata.length} </p>
            <div class="overflow-x-auto h-[80vh] ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>email</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            pattinetdata.map((data, index) => <tr class="hover" >
                                <th> {index + 1} </th>
                                <td>{data.doctorcategorey} </td>
                                <td>{data.appointmentDate} </td>
                                <td>{data.appoinmentslot}</td>
                                <td>{data.appoinmentpattientemail}</td>
                                <td>
                                    {
                                        data.price && !data.paid &&

                                        <NavLink to={`/dashboard/Payment/${data._id}`} >
                                            <button className="btn btn-sm">pay</button>
                                        </NavLink>

                                    }
                                    {
                                        data.price && data.paid && <button disabled={data.price && data.paid} className="btn btn-sm">paid</button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappoinments;