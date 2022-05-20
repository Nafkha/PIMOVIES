import React, { useEffect } from 'react'
import Moviecard from '../moviecard/Moviecard'
import { useDispatch,useSelector } from 'react-redux'
import './movielist.css'
import darthvader from './darthvader.png'
import ironman from './ironman.jpg'
import Navbar from '../navbar/Navbar'
import {IoSearch,IoStar} from 'react-icons/io5'
import { fetchMovies,reset } from '../../features/movies/moviesSlice'
import { getFavourites } from '../../features/favourites/favouritesSlice'
import {toast} from 'react-toastify'


export default function Movielist() {
  const { movie, isLoading, isError, message } = useSelector(
    (state) => state.movie
  )
  const {user} = useSelector((state)=>state.auth)
  const {favourites} = useSelector((state)=>state.favourites)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    dispatch(fetchMovies())
    dispatch(getFavourites())
    return() =>{
      dispatch(reset())
    }
  }, [user,isError,message,dispatch])
  const onClick = () =>{
    alert("Hello World")
    console.log(favourites)
  }
  const favTable = favourites;
  return (
    <>


    <div style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0)),url(${darthvader})`}} className="header">

      <Navbar/>
      <div className='searchForm'>
        <input type="text" placeholder="Nom de film" className='movieName'/>
        <button onClick={onClick} className='button_rechercher'> <IoSearch/> Rechercher</button>
      </div>
      </div>
     
      <div className='movieListe'>
      {/* Liste principale des filmes */}
      {movie.map(m =><Moviecard poster={m.poster} id={m._id} title={m.title}/>)}
      </div>
      <div style={{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 100%),url(${ironman})`}} className="header">
        <div className='copyright'>
          <h1>Favourites</h1>
          {/* <span className='crText'>
            Created By <IoStar style={{color:'gold'}}/><IoStar style={{color:'gold'}}/><IoStar style={{color:'gold'}}/> <a href='https://github.com/Nafkha'>M.Y.N</a>
            <IoStar style={{color:'gold'}}/><IoStar style={{color:'gold'}}/><IoStar style={{color:'gold'}}/><IoStar style={{color:'gold'}}/>
          </span> */}
        </div>
        <div className='movieListe'>
        {favourites.favourites?movie.map(m=>favourites.favourites.indexOf(m._id)>-1?<Moviecard poster={m.poster} id={m._id} title={m.title}/>:null ):<h1>Error</h1>}

        </div>

      </div>



    </>
  )
}
