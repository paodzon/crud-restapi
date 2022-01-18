import React,{useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Viewpage from './pages/ViewPage/Viewpage';
import { useDispatch } from 'react-redux';
import { checkUser } from './actions/authActions';
const App = () => {

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(checkUser());
    },[dispatch])

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
