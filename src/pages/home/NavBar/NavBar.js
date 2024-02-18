import React from 'react';
import './NavBar.css';
import '../DarkModeButton/DarkMode.js'
import DarkMode from '../DarkModeButton/DarkMode.js';

function NavBar(){
    return (
        <header>
            <nav>
                <a href='/'>Home</a>
                <a href='/'>Streams</a>
                <a href='/'>Party</a>
                <a href='/'>Premium</a>
            </nav>
            <h1>GAMOR</h1>
            <div id='navbtns' > 
                <a href='/login'>Log in</a>
                <a href='/login' class='btn'>Create account</a>
                <DarkMode/>         
            </div>
        </header>
    )
}
export default NavBar 