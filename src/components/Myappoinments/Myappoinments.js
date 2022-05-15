import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebasekey/Firebasekey';

const Myappoinments = () => {

    const [pattinetdata, setPattientdata] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:8000/appoinment?appoinmentpattientemail=${user?.email}`)
            .then(res => res.json())
            .then(data => setPattientdata(data))
    }, [user])



    return (
        <div>
            <p>ahabdd {pattinetdata.length} </p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Categorey</th>
                            <th>Date</th>
                            <th>slots</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pattinetdata.map(data => <tr class="hover" >
                                <th> {data.appoinmentpattientname} </th>
                                <td>{data.doctorcategorey} </td>
                                <td>{data.appointmentDate} </td>
                                <td>{data.appoinmentslot}</td>
                                <td>{data.appoinmentpattientemail}</td>
                            </tr>)
                        }
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappoinments;