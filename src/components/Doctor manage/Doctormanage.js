import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../Loading/Loader';




const Doctormanage = () => {

    const { data: doctors, isLoading, refetch} = useQuery('doctors', () =>
        fetch('http://localhost:8000/doctors').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        <Loader></Loader>
    }


// delet button handel here

   const deleted =(name) => {
       const procced = window.confirm('are you sure?')
       if(procced){
        const url = `http://localhost:8000/doctors/${name}`
        console.log(url);
        fetch(url, {
         method : "DELETE",     
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                toast.success(`successfully deleted Doctor : ${name} `)
                refetch()
            }
            else{
                toast.error("delet failed")
            }
            console.log(data)
         })
       }
       
   }

    return (
        <div>
            <p>Our total Doctors is {doctors?.length} </p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>photo</th>
                            <th>Name</th>
                            <th>categorey</th>
                            <th>designation</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <tr>
                                <th> {index + 1} </th>
                                <td>  <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={doctor?.img}  alt="doctorimage"/>
                                    </div>
                                </div> </td>
                                <td> {doctor?.name} </td>
                                <td> {doctor?.categorey} </td>                           
                                <td> <button onClick={()=> deleted(doctor?.name)} className="btn btn-sm  btn-error">Delete</button> </td>
                            </tr>)
                        }
                        {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctormanage;