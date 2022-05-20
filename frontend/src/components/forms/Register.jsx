
import './form.css'
import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'
import {toast} from 'react-toastify'
export default function Register() {
    const [formData,setFormData] = useState({
        nom : '',
        prenom : '',
        email : '',
        password:'',
        password2:''
    })
    const {nom,prenom,email,password,password2} = formData
    const dispatch = useDispatch()

    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(password!==password2){
            console.log("Error")
        }else{
            const userData = {nom,prenom,email,password}
            dispatch(register(userData))
        }
    }

    const {user,isError,isSuccess,message} = useSelector((state)=>
    state.auth)
useEffect(()=>{
    console.log("TEST")
    if(isError){
        toast.error(message)
        console.log(message)
    }
    if(isSuccess || user){
        toast.success("Account Created :)")

    }
    dispatch(reset())

},[user,isError,isSuccess,message,dispatch])

  return (
    <form onSubmit={onSubmit}>
        <label>Nom</label>
        <br/>
        <input className='form_input' type='text' placeholder="Nom" name='nom' onChange={onChange}/>
        <br/>

        <label>Prénom</label>
        <br/>
        <input className='form_input' type='text' placeholder="Prénom" name='prenom' onChange={onChange}/>
        <br/>

        <label>Email</label>
        <br/>
        <input className='form_input' type='email' placeholder="Email" name='email' onChange={onChange}/>
        <br/>
        <label>Mot de passe</label>
        <br/>
        <input className='form_input' type='password' placeholder="Password" name='password' onChange={onChange}/>
        <br/>

        <label>Repeter mot de passe</label>
        <br/>
        <input className='form_input' type='password' placeholder="Password" name='password2' onChange={onChange}/>
        <br/>
        <button className='subButton' type='submit' >Créer Compte</button>
    </form>
  )
}
