// // import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

// import { useEffect, useState } from "react"

// const Token = user => {
//     const [token, setToken] = useState('')

//     useEffect(() => {
//         const email = user?.user?.email
//         console.log(email);
//         const emails = {email: email}
//         console.log(emails);
//         if (email) {
//             const url = `http://localhost:8000/user/${email}`
//             fetch(url, {
//                 method: "PUT", 
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(emails),
//             })
//                 .then(res => res.json())
//                 .then(data => console.log("dijfhrfhcvnfghfhrehrh", data))
//         }

//     }, [user])
//     return [token]

// };

// export default Token;



// const Token = user => {
//     const [token, setToken] = useState('')
//     useEffect(() => {
//         console.log(user);
//         const email = user?.user?.email;
//         console.log(email);
//         const currentuser = {email: email}
//         console.log(currentuser);
//         if (email) {
//             fetch(`http://localhost:8000/user/${email}`, {
//                 method: "PUT",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(currentuser),
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log( "got from here", data)
//                 const tokens = data.token;
//                 console.log(tokens);
//                 localStorage.setItem('access token', tokens)
//                 setToken(tokens);
//             })
//         }
//     }, [user])
//     return [token]
// }

// export default Token





const Token = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email;
        const currentuser = {email: email}
        if (email) {
            fetch(`http://localhost:8000/user/${email}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentuser),
            })
            .then(res => res.json())
            .then(data => {
                const token = (data.token)
                localStorage.setItem( "accesstoken", token)
                setToken(token)
                console.log( "got from here", data)
            })
        }
    }, [user])
    return [token]
}

export default Token