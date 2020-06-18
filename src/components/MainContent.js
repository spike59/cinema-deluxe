import React from 'react';
import Films from './Films.js';
import genres from '../data/genres.json';

const MainContent = ({ bp }) => {

    const topRating3 = "_sort=rating:ASC&_limit=3";

    const genresFilms = {...genres}.list.map((g) => {
        return(
        <section id={g + "_films"}>
            <h1>{genres[g].title}</h1>
            <Films filter={"genre=" + g + "&_limit=6"} count="6" big={false} bp={bp} />
        </section>
        );
    });

    return (
        <div className={"main_content"}>
            <section id="top_films">
                <h1>Top films</h1>
                <Films filter={topRating3} count="3" big={true} bp={bp} />
            </section>
            {genresFilms}
        </div>
    )

}

export default MainContent
