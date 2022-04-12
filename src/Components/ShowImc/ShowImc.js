import React, { useEffect } from 'react'
import axios from 'axios'

export default function ShowImc() {
    let token = localStorage.getItem('token')
 
 useEffect(()=>{
     const config = {
         headers: { Authorization: `Bearer ${token}` }
     };
   axios.get('http://127.0.0.1:3000/myimc',config)
   .then((data)=>{
       console.log("ceci sont les datas",data);
   })

 },[token])

    return (



    <div>ShowImc</div>
  )
}
