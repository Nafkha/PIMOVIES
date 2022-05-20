import axios from 'axios'
const API_URL = '/api/users/'

//Register User

const register = async(userData) =>{
    const response = await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const login = async(userData) =>{
    const response = await axios.post(API_URL + 'login',userData)
    console.log("userData ",userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const addFavourite = async (token,movieId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    console.log("MOVIE ID SERVICE : "+movieId)
    console.log("TOKEN SERVICE : "+token)
  
    const response = await axios.post(API_URL+'addFavourite',{movieId},config)
  
    return response.data
  }
  

const logout = () =>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    addFavourite
}
export default authService