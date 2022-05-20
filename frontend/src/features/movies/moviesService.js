import axios from 'axios'
const API_URL = '/api/movies/'
//Ajouter Film


const ajouterFilm = async(filmData) =>{
    const response = await axios.post(API_URL,filmData)
    if(response.data){
        console.log('Film Ajoutée');
    }
    return response.data
}
const getMovies = async () => {
    
  
    const response = await axios.get(API_URL)
    return response.data
  }
const movieService = {
    ajouterFilm,
    getMovies
   
}
export default movieService