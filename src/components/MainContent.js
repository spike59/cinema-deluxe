import React from 'react';
import Films from './Films.js';

const MainContent = ({bp}) => {

    const topRating3 = "_sort=rating:ASC&_limit=3";
    const actionFilms = "genre=action&_limit=6";
    const scifiFilms = "genre=science_fiction&_limit=6";
    return (
        <div className={"main_content_" + bp}>
            <section id="top_films">
                <h1>Top films</h1>
                <Films filter={topRating3} count="3" big={true} bp={bp}/>
            </section>
            <section id="actions_films">
                <h1>films d'action</h1>
                <Films filter={actionFilms} count="6" big={false} bp={bp}/>
            </section>
            <section id="sci_fi_films">
                <h1>films de science fiction</h1>
                <Films filter={scifiFilms} count="6" big={false} bp={bp}/>
            </section>
        </div>
    )

}

export default MainContent
