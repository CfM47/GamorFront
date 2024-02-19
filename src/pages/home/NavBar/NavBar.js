import React from 'react';
import './NavBar.css';
import '../DarkModeButton/DarkMode.js'
import DarkMode from '../DarkModeButton/DarkMode.js';

function NavBar(props){
    
    const { name, loggedIn, setLoggedIn} = props

    const logOut = ()=>{
        localStorage.removeItem('user')
        setLoggedIn(false)
    }
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
                <div id='logInfo'>
                    {!loggedIn ? <a href='/login'>Log in</a> : <p>Welcome {name}!</p>}
                    {!loggedIn ? <a href='/register' class='btn'>Create account</a> : <button onClick={logOut}>Log out</button>}
                </div>
                <DarkMode/>         
            </div>
        </header>
    )
}
export default NavBar 