import React from 'react'
import './navbar.css'

export default function () {
  return (
    <div className='navbar-container'>
      <img className='logo' src='https://pi.tn/wp-content/uploads/2019/02/Logo-Pi-RVB.png'/>

      <div className='navbar'>

        <ul>
            <li>Acceuille</li>
            <li>Mes favouris</li>
            <li>Ajouter un film</li>
        </ul>
      </div>
    </div>


  )
}
