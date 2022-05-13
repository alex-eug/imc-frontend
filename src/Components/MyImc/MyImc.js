import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import './myImc.css'
import axios from "axios";



export default function MyImc() {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    let storeUserName = localStorage.getItem('userName')
    let isLog=true
    // let userId = localStorage.getItem('userId')
    //    console.log("bonjour",token);
    const [inputs, setInputs] = useState({});
    // const [imc, setImc] = useState()
    if(localStorage.userName){
        console.log('bonjour',localStorage.userName);
    }else{
        isLog=false
        console.log('y a personne');
    }
    console.log(isLog);

    const handleChange = (e) => {
        const name = (e.target.name);
        const value = (e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
      
        //console.log(yourImc);
       
    }
    let imc =   ((inputs.weight / (inputs.height * inputs.height)) * 10000).toFixed(1)
    


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("bonjourtoken",token);
if(isLog){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
            
        };

        const bodyParameters = {
            imc: imc,
        }
        await axios.post('https://stormy-hollows-71516.herokuapp.com/myimc', bodyParameters, config)
        navigate('/showimc')
    }else{
        goImc()
    }
    }
    
   const goImc = ()=>{
       if(isLog){
           navigate('/showImc')
       }else{
           let para = document.querySelector('.connected-para')
           para.style.display='block'
       }
   }
   

    return (
        <div className='myimc-container'>
   
        <div className='title-container'>
                <h2 className="myimc-h2">Bienvenue <span>{storeUserName}</span></h2>
                <button
                    className=' evo-imc'
                    onClick={()=>goImc() }
                >

                    Voir l'évolution de mon IMC
                </button>
                </div>
                <form className='formContainer-myimc' onSubmit={handleSubmit}>
                <label className="myimc-label">Taille(cm)
                    <input className='myimc-input'
                    type="number"
                        name="height"
                        value={inputs.height || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className="myimc-label">Poids(kg)
                    <input className='myimc-input'
                        type="number"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange}
                    />
                    </label>

                <button className='myimc-button' type="submit">
                enregistrer votre imc
                </button>
                
                <p 
                className="myimc-para">{isNaN(imc) ? " " : "Votre imc est de " + imc}
                </p>
          
                </form>
                <p className='connected-para'>Veuiller vous connectez</p>
                
        </div>
    )

    
}
