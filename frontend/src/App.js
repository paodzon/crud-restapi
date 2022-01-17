import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Viewpage from './pages/ViewPage/Viewpage';

const App = () => {

    return (
        <div className='app'>
            <div className='app__header'>
                <Navbar/>
            </div>
            <div className='app__body'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/view/:id' element={<Viewpage/>} />
                </Routes>
            </BrowserRouter>
            </div>
            <div className='app__footer'>

            </div>
        </div>
    )
}

export default App
