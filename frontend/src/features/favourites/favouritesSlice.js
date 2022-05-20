import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import favouritesService from './favouritesService'
const initialState = {
    favourites:[],
}
export const getFavourites = createAsyncThunk('fav/getFavourites',async(_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        console.log("TOKEN Slice : "+token)
        return await favouritesService.getFavourites(token)
    }catch(error){
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
        console.log(message)
      return thunkAPI.rejectWithValue(message)
    }
})
export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
   
    extraReducers: (builder) =>{
        builder.addCase(getFavourites.fulfilled,(state,action)=>{
                state.favourites = action.payload
        }).addCase(getFavourites.rejected,(state,action)=>{
            console.log(action.payload)
        })


    }
})
export default favouriteSlice.reducer