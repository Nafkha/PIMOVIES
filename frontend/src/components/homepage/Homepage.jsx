import { useState } from 'react'
import './homepage.css'
import Login from '../forms/Login'
import Register from '../forms/Register'
export default function Homepage() {
  const [action,setAction] = useState('login')
  const onClickAction = () =>{
    if(action == "login"){
      setAction('register');
    }else{
      setAction('login')
    }
    console.log(action)
  }


  return (<>

    <div className="home">
      {
        (action == 'login') ? <button onClick={onClickAction}>Créer un compte</button> : <button onClick={onClickAction}>
          J'ai déja un compte
        </button>
      }
      {
        (action == 'login') ? <Login/> : <Register/>
      }
    </div>
  </>
  )
}
