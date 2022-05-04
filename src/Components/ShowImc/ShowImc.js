import React, { useEffect, useState } from 'react';
import './showImc.css'
import axios from 'axios'
import Graph from './Graph/Graph';

export default function ShowImc() {
  let token = localStorage.getItem('token')
  
  
  const [date, setDate] = useState([])
  const [imc, setImc] = useState([])
  
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  axios.get('http://127.0.0.1:3000/myimc', config)
    .then((data) => {
      let dataImc = (data.data[0]);
      dataImc.forEach(element => {
        setImc(imc => [...imc, element.imc])
        setDate(date => [...date, element.createdAt])
      });
      
    })
    
  },[token])
   
  //récuperation date sous le bon format pret pour l'affichage
  
      
  
  
  return (

    <div>
      <Graph
        date={date}        
        imc={imc}
      />
    </div>
  )
}
