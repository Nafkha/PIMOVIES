import { useState } from 'react'
import './homepage.css'
export default function Homepage() {


  return (<>

    <div className="home">
         <div className='buttons'>
        <button className='createAccount'>Créer un compte</button>
        <button className='login'>S'Authentifier</button>

        </div>
        {/* <div className='cr'>
            Mohamed Youssef Nafkha
        </div> */}
    </div>
  </>
  )
}
