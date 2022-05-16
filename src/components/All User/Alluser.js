import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../Loading/Loader';



const Alluser = () => {
   
    const { isLoading, data: users , refetch } = useQuery('user', () =>
        fetch('http://localhost:8000/user', {
            method: "GET",
            headers: {
                'authorization': ` Bearer ${localStorage.getItem("accesstoken")} `
            }
        })
        
        .then(res =>
            res.json()
        )
    )
    
    if (isLoading) {
        return <Loader></Loader>
    }

    const makeadmin = (email)=> {
        const url = `http://localhost:8000/user/admin/${email}`
        console.log(url);
     fetch(url,{
         method : "PUT", 
         headers : {
          'authorization' : `Bearer ${localStorage.getItem("accesstoken")}`  
         }
     })
     .then(res => res.json())
     .then(data => {
        toast.success("successfully adedded")
        refetch()
        console.log ("from all", data)})
    }         
    // const makeadmin = email => {
    //     const url = `http://localhost:8000/user/admin/${email}`
    //     fetch(url,{
    //         method : "PUT",
    //         headers : {
    //             authorization : `Bearer ${localStorage.getItem("accesstoken")}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log("got from here", data))
      
    //     console.log(url)
    // }

    return (
        <div>
            <p>Users {users.length} </p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}  </th>
                                <td> {user.email} </td>
                                <td> { user?.role === "admin" ? <button disabled={user?.role === "admin"} className="btn btn-sm"> Already Admin </button> : <button onClick={()=>makeadmin(user?.email) } class="btn btn-sm  ">Make Admin</button>} </td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;