import React from 'react'
import '../../App.css';
import NavBar from './NavBar/NavBar';
import MainBoard from './MainBoard/MainBoard';
import TrendingCategories from './Categories/Categories';

const Home = (props) => {
    const { name, loggedIn, setLoggedIn} = props
    console.log(loggedIn)
    return (
        <>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} name={name}/>
            <MainBoard loggedIn={loggedIn}/>
            <TrendingCategories/>
        </>
    )
}

export default Home