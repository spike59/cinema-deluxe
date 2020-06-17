import React from 'react';
import Films from './Films.js';

const MainContent = () => {

    const topRating3 = "_sort=rating:ASC&_limit=3";
    const actionFilms = "genre=action&_limit=6";
    return (
        <div>
            <div>
                <h1>Top films</h1>
                <Films filter={topRating3} count="3" />
            </div>
            <div>
                <h1>films d'action</h1>
                <Films filter={actionFilms} count="6" />
            </div>
        </div>
    )

}

export default MainContent
