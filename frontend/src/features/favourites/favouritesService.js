import axios from "axios";
const API_URL = '/api/users/'

const getFavourites = async(token) =>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    console.log("FAV TOKEN : "+token)
    const response = await axios.get(API_URL+'favouriteMovies',config)
    return response.data

}
const favouritesService = {
    getFavourites,
   
}
export default favouritesService