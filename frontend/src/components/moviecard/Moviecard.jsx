import React, { useEffect } from 'react'
import './card.css'
import {IoHeart} from 'react-icons/io5'
import { useSelector,useDispatch } from 'react-redux'
import { addFave,getFaves } from '../../features/auth/authSlice'
import { getFavourites } from '../../features/favourites/favouritesSlice'
export default function Moviecard(props) {
  const poster = props.poster
  const {user} = useSelector((state)=>state.auth)
  const dispatch= useDispatch();
  const onClick = ()=>{
    dispatch(addFave(props.id))
    dispatch(getFavourites())
  }

  

  return (
    <div style={{backgroundImage:`url(${poster})`}} className='card'>
        <h3 className='movieTitle'>{props.title}</h3>
        <button className="ajouterFavouris" value={props.id} onClick={onClick}><IoHeart style={{color:"red"}}/>  Ajouter Favouris</button>
       
    </div>
  )
}
