import React from 'react';
import './Categories.css';

function TrendingCategories(){
    const trending = ["Action Games", "Sports Games", "Adventure Games", "Arcade Games", "Fantasy Games", "Strategy Games", "ShooterGames"]
    const categories = trending.map(x => {
        return(
                <li>
                    <p>{x}</p>
                    <a href='a'>→</a>
                </li>
            )
    }) 
    return (
        <div class='trendingCategories'>
            <h2>TrendingCategories</h2>
            <div>
                <ol class='categorieContainer'>
                    {categories}
                    <li id='seeAll'>
                        <p>See All Categories</p>
                        <a href='a'>→</a>
                    </li>
                </ol>
            </div>
        </div>
    )    
}
    

export default TrendingCategories;