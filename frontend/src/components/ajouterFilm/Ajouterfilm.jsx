import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import FileBase64 from 'react-file-base64';
import { useSelector,useDispatch } from 'react-redux';
import './ajouterfilm.css'
import { ajouterMovie } from '../../features/movies/moviesSlice';
export default function Ajouterfilm() {
  const [formData,setFormData] = useState({
    title : '',
    poster : '',
    releaseDate : '',
})
const {title,poster,releaseDate} = formData
const dispatch = useDispatch()
const onSubmit = (e) =>{
  e.preventDefault()
  
      const userData = {title,poster,releaseDate}
      dispatch(ajouterMovie(userData))
      console.log(userData)
      console.log("Movie added")
  
}
const onChange = (e) =>{
  setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
  }))
  console.log(formData);
}
const onDone = ({base64})=>{
  setFormData((prevState)=>({
    ...prevState,
    poster:base64
  }))
  console.log(formData)
}
  return (
      <>
    <div className="container">
        <Navbar/>
            <div className='ajoutFilmForm'>
            <form onSubmit={onSubmit}>
                <h1>Ajouter un film</h1>
              

            <label>Nom de film</label>
            <input type="text" placeholder="Nom de film" name='title' className='textfield' onChange={onChange}/>
            <label>Poster</label>
            {/* <input type="file" className='file-input' name='poster'/> */}
            <FileBase64 type="file" multiple={false} className='file-input' onDone={onDone}/>
            <label>Date de sortie</label>
            <input type="date" className='textfield' name='releaseDate' onChange={onChange}/>
            <button type='submit' onSubmit={onSubmit}>Ajouter le film</button>
        </form>
            </div>
    </div>
      </>
  )
}
