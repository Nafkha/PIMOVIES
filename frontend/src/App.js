import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/homepage/Homepage';
import Browse from './components/browse/Browse';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/browse' element={<Browse/>}/>

      </Routes>

    </Router>
   
   </>
  );
}

export default App;
