import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { login,reset } from '../../features/auth/authSlice'
import Spinner from '../spinner/Spinner'
import './form.css'

export default function Login() {
  const [formData,setFormData] = useState({
    
    email : '',
    password:'',
})
const {email,password} = formData
const dispatch = useDispatch()
const onChange = (e) =>{
  setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
  }))
  console.log(formData)
}
const onSubmit = (e) =>{
  e.preventDefault()
  
      const userData = {email,password}
      dispatch(login(userData))
  
}


const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>
state.auth)

useEffect(()=>{
  console.log("TEST")
  if(isError){
      toast.error(message)
      console.log(message)
  }
  if(isSuccess || user){
      toast.success(user.email)

  }
  dispatch(reset())

},[user,isError,isSuccess,message,dispatch])
if(isLoading){
  return <Spinner/>
}

  return (
    <form onSubmit={onSubmit}>
        <label>Adresse email</label>
        <br/>
        <input className='form_input' type='email' name='email' onChange={onChange} placeholder="Email"/>
        <br/>
        <label>Mot de passe</label>
        <br/>
        <input className='form_input' type='password' name='password' onChange={onChange} placeholder="Password"/>
        <br/>
        <button className='subButton' type='submit'>Se Connecter</button>
    </form>
  )
}
