import React from 'react'
import '../../App.css';
import NavBar from './NavBar/NavBar';
import MainBoard from './MainBoard/MainBoard';
import TrendingCategories from './Categories/Categories';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
    // You'll update this function later
    }

    return (
        <>
            <NavBar/>
            <MainBoard/>
            <TrendingCategories/>
        </>
    )
}

export default Home