// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Loader from '../Loading/Loader';




// const Payment = () => {
//     // const [appoinments  , setAppoinments] = useState({})
//     const { id } = useParams()
//     const url = `http://localhost:8000/appoinment/${id}`
//     console.log(url);
//     fetch(url, {
//         "method": "GET",
//     })
//     .then(res => res.json())
//     // .then(data => setAppoinments(data));

// //     const {  data:appoinments , isLoading } = useQuery( id,'appoinment', () =>
// //     fetch(`http://localhost:8000/appoinment/:${id}`,{
// //         "method": "GET",
// //     })
// //     .then(res =>
// //       res.json()
// //     )
// //   )

// //   if(isLoading){
// //       return <Loader></Loader>
// //   }



//     return (
//         <div>
//             {/* <p>aaaa {id} </p> */}
//             {/* <p>name : {appoinments?.price}</p> */}
//             {/* <p> cdd {appoinments?.setAppoinments} </p> */}
//         </div>
//     );
// };

// export default Payment;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
   const [appoinments , setAppoinments]= useState({})
   const url = `http://localhost:8000/appoinment/${id}`
   console.log(url, "aaddjh");
   fetch(url,{
    "method": "GET",
   })
   .then(res => res.json())
   .then(data => console.log(data))



    return (
        <div>
            <p>{id}</p>

        </div>
    );
};

export default Payment;