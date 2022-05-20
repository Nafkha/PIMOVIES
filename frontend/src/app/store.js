import { configureStore } from '@reduxjs/toolkit';
import  authReducer from '../features/auth/authSlice'
import movieReducer from '../features/movies/moviesSlice'
import favouriteReducer from '../features/favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    favourites : favouriteReducer
  },
});
