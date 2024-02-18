import React from 'react';
import './NavBar.css';

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
            <div> 
                <a href='a'>Log in</a>
                <a href='a' class='btn'>Create account</a>
            </div>
            
        </header>
    )
}
export default NavBar 