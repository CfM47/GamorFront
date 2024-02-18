import React from 'react';
import './NavBar.css';
import './DarkModeButton/DarkMode.js'
import DarkMode from './DarkModeButton/DarkMode.js';

function NavBar(){
    return (
        <header>
            <nav>
                <a href='#a'>Home</a>
                <a href='#a'>Streams</a>
                <a href='#a'>Party</a>
                <a href='#a'>Premium</a>
            </nav>
            <h1>GAMOR</h1>
            <div id='navbtns' > 
                <a href='a'>Log in</a>
                <a href='a' class='btn'>Create account</a>
                <DarkMode/>         
            </div>
        </header>
    )
}
export default NavBar 