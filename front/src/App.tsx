import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Pages/Main/MainContainer';

export const App = () => {
  return(
    <div>
      <Navbar/>
      <MainContainer/>
    </div>
  )
}

export default App;
