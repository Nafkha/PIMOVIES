import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import moviesService from './moviesService'
const initialState = {
    movie:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const ajouterMovie = createAsyncThunk('movies/ajouterMovie', async (movie,thunkAPI)=>{
    try {
        
        await moviesService.ajouterFilm(movie)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        alert('fuck')
          return thunkAPI.rejectWithValue(message)
        
    }

})
export const fetchMovies = createAsyncThunk('movies/getMovies', async (_,thunkAPI)=>{
    try{
       return await moviesService.getMovies()
    }catch(error){
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        alert('fuck')
          return thunkAPI.rejectWithValue(message)

    }
})
export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        reset: (state) => initialState,

    },
    extraReducers : (builder) =>{
        builder.addCase(ajouterMovie.pending,(state)=>{
            state.isLoading =true
        }).addCase(ajouterMovie.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.movie = action.payload
        }).addCase(ajouterMovie.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.movie = null
        }).addCase(fetchMovies.pending,(state)=>{
            state.isLoading = true;
        }).addCase(fetchMovies.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.movie = action.payload;
            console.log("Payload : ",action)
        }).addCase(fetchMovies.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})
export const { reset } = moviesSlice.actions

export default moviesSlice.reducer