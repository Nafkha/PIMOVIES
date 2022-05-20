import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Movielist from './components/movielist/Movielist';
import Ajouterfilm from './components/ajouterFilm/Ajouterfilm';
import Navbar from './components/navbar/Navbar';
import Spinner from './components/spinner/Spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
   <Movielist/>
   <ToastContainer/>
    
   </>
  );
}

export default App;
