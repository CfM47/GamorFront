import React from 'react';
import './NavBar.css';
import '../DarkModeButton/DarkMode.js'
import DarkMode from '../DarkModeButton/DarkMode.js';

function NavBar(loggedIn, setLoggedIn, email){

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
                <div>
                    {loggedIn ?
                        <a href='/login'>Log in</a>
                        :<p>Welcome, {email}!</p>
                    }
                    <a href='/login' class='btn'>Create account</a>
                </div>
                <DarkMode/>         
            </div>
        </header>
    )
}
export default NavBar 