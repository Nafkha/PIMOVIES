import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
    <Homepage/>
    <ToastContainer/>
   
   </>
  );
}

export default App;
