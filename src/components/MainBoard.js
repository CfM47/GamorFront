import React from "react";
import './MainBoard.css'
import imageLight from './forniteLight.png'

function MainBoard(){
    return (
        <div id='mainBoardContainer'>
            <Publicity/>
            <ComingEvents/>
            <SelectionPanel/>
        </div>
    );
}

function Publicity(){
    return (
        <div class='newsContainer' id='publicity'>
            <div id="publicitySign">
                <h1>Start</h1>
                <h1 id='streamingh1'>streaming</h1>
                <h1>games</h1>
                <h1>diferently</h1>
            </div>
            <p>gamor now has <b>streaming party</b> platform</p>
            <div id="publicitybtns">
                <a href="a" class='btn'>Sign in</a>
                <a href="a">Create an account</a>
            </div>
        </div>
    )
}

function ComingEvents(){
    return (
        <div class='newsContainer' id='nextStream'>
            <h2>Fortnite new season</h2>
            <p>Join the live stream</p>
            <a href="a" class='btn'>Join</a>
            <div class="fill">
                <img src={imageLight} alt="fortnite stream"></img>
            </div>
        </div>
    )
}

function SelectionPanel(){
    const streamers = ["Dr Team", "Mia Plays", "Keoexer", "NickMerc", "Mia Plays", "Keoexer", "NickMerc", "Mia Plays", "Keoexer", "NickMerc"]
    const topStreamers = streamers.map(x =>{
        return (
            <li id='streamerItem'>
                {x}
                <button>+</button>
                <hr/>
            </li>
        )
    })

    return (
        <div class='newsContainer' id='selectionContainer'>
            <ol id='selectionPanel'>
                <li>
                    <h2>Choose platform</h2>
                    <div class="choosePlatform">
                        <button>Party</button>
                        <button>Matchs</button>
                        <button>Streams</button>
                    </div>
                </li>
                <li>
                    <h2>Searching Game</h2>
                    <div id='searchPanel'>
                        <h3>COD Warzone</h3>
                        <hr></hr>
                        <ol id='streamers'>{topStreamers}</ol>
                        <button id='searchButton'>Search Now</button>
                    </div>
                </li>
            </ol>    
        </div>
    )
}

export default MainBoard