import React, { useEffect, useState } from 'react';



const UseAdmin = user => {
    const [admins , setADmins] = useState(false)
    const [admincheckloading , setAdmincheckloading] = useState(true)
    useEffect(()=> {
        const useremail = user?.email;
        if(useremail){
            fetch(`http://localhost:8000/admin/${useremail}`,{
                "method" : "GET",})
                .then(res => res.json())     
                .then(data => {
                    setADmins(data.admin)
                    setAdmincheckloading(false)
                    console.log(data)
                })
        }
    },[user ])


    return [admins, admincheckloading ]
        
    
};

export default UseAdmin;