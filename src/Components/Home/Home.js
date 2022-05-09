import React from 'react'
import  { useNavigate }  from "react-router-dom";
import './home.css'


export default function Home() {
  let navigate =  useNavigate();
  const GoToImc = () => {
    navigate('/myImc')
}

  return (
    <div className='homeContainer'>
      <h1 className='main-title-home'>Calculer votre IMC</h1>
      
      
      <p className='home-para'>L'Organisation mondiale de la santé (OMS) a défini en 1997 cet indice de masse corporelle comme la norme pour évaluer les risques liés au surpoids chez l’adulte. Elle a également défini des intervalles standards (maigreur, indice normal, surpoids, obésité) en se basant sur la relation constatée statistiquement entre l'IMC et le taux de mortalité.

      Les compagnies américaines d'assurance maladie utilisent l'IMC comme indicateur du risque d'accident cardiovasculaire chez leurs assurés et font varier les primes sur la base de ce critère. Cependant, les accidents cardiovasculaires sont rares avant 65 ans. Il existe des moyens plus scientifiques pour déterminer les risques, mais les compagnies ne peuvent pas légalement les demander à leurs assurés : cholestérolémie, fréquence cardiaque avant et après effort, etc.
      
      L'IMC est surtout utile pour mettre en évidence l'augmentation des facteurs de risques. Il n'a pas vocation à déterminer précisément la valeur de la masse grasse ou, encore moins, de la masse musculaire et osseuse.
      
      
      
     <a href='https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle'> <cite   className='cite'>source:wikipédia</cite></a>
      </p>

      <p
        className='go-to-imc-button'
        onClick={GoToImc}
        >
        Calcul de l'IMC
      </p>

    </div>
  )
}
