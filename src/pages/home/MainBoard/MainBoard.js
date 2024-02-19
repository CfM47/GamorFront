import React, { useState } from "react";
import './MainBoard.css'
import imageLight from './forniteLight.png'
import { matchRoutes } from "react-router-dom";

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
                <a href="/login" class='btn'>Sign in</a>
                <a href="/register">Create an account</a>
            </div>
        </div>
    )
}

function ComingEvents(){
    return (
        <div class='newsContainer' id='nextStream'>
            <h2>Fortnite new season</h2>
            <p>Join the live stream</p>
            <a href="/" class='btn'>Join</a>
            <div class="fill">
                <img src={imageLight} alt="fortnite stream"></img>
            </div>
        </div>
    )
}

function SelectionPanel(){

    const [party, setParty] = useState(false)
    const [match, setMatchs] = useState(false)
    const [streams, setStreams] = useState(false)

    const toggleParty = () => setParty(!party);
    const toggleMatch = () => setMatchs(!match);
    const toggleStreams = () => setStreams(!streams);
 
    var data = require("../../games.json")
    const topStreamers = (streamers) => streamers.map(x =>{
        return (
            <li id='streamerItem'>
                {x}
                <button>+</button>
                <hr/>
            </li>
        )
    })
    const games = data.games.filter(x => {
        if(party && !x.isParty)
            return false;
        if(match && !x.isMatch)
            return false;
        if(streams && !x.isStream)
            return false;
        return true;
    });
    const filteredGames = games.map((x) => {
        return(
            <>
                <h3>{x.name}</h3>
                <hr></hr>
                <ol id='streamers'>{topStreamers(x.streamers)}</ol>
            </>
        )
    })

    return (
        <div class='newsContainer' id='selectionContainer'>
            <ol id='selectionPanel'>
                <li>
                    <h2>Choose platform</h2>
                    <div class="choosePlatform">
                        <button onClick={toggleParty} class={party? 'tagSelected' : 'tagNonSelected'}>Party</button>
                        <button onClick={toggleMatch} class={match? 'tagSelected' : 'tagNonSelected'}>Matchs</button>
                        <button onClick={toggleStreams} class={streams? 'tagSelected' : 'tagNonSelected'}>Streams</button>
                    </div>
                </li>
                <li>
                    <h2>Searching Game</h2>
                    <div id='searchPanel'>
                        <ol id='gamesPanel'>{filteredGames}</ol>
                        <button id='searchButton'>Search Now</button>
                    </div>
                </li>
            </ol>    
        </div>
    )
}

export default MainBoard