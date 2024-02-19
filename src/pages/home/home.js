import React from 'react'
import '../../App.css';
import NavBar from './NavBar/NavBar';
import MainBoard from './MainBoard/MainBoard';
import TrendingCategories from './Categories/Categories';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const { name, loggedIn, setLoggedIn} = props
    return (
        <>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} name={name}/>
            <MainBoard/>
            <TrendingCategories/>
        </>
    )
}

export default Home