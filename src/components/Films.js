import React, { useState, useEffect } from 'react';
import Film from './Film.js';
import filmPlaceholder from '../data/film_placeholder.json';
import getStrapiMovies from '../functions/getStrapiMovies.js';
import UUID from '../functions/uuid.js';

const Films = ({ filter, count ,big, bp}) => {

    const initialFilterState = {
        loaded: false,
        query: filter,
        count: count,
        films: [],
        errors: [],
        warning: []
    }
    const [filterState, setFilterState] = useState(initialFilterState);

    let loaded = false, films = [];
    let storageFilter = JSON.parse(localStorage.getItem("filter:" + filter));
    if (storageFilter && storageFilter.loaded) {
        loaded = true;
        films = storageFilter.films;
        //console.log("on arecupéré le filter" + filter + " et les films " + films);
    }
    else {
        localStorage.setItem("filter:" + filter, JSON.stringify({ loaded: false, films: [] }));
    }

    useEffect(() => {
        //console.log("use effect ", filter);
        if (!filterState.loaded) {
            async function loading_strapi_films() {
                let r = await getStrapiMovies(filter);
                //console.log("R", r);
                let f = { ...filterState };
                f.loaded = true;
                f.films = r.films;

                //mis a jour du local storage
                let storageFilter = JSON.parse(localStorage.getItem("filter:" + filter));
                //console.log("storageFilter", storageFilter);
                storageFilter.loaded = true;
                storageFilter.films = r.films;
                localStorage.setItem("filter:" + filter, JSON.stringify(storageFilter));

                setFilterState(f);
            };
            loading_strapi_films();
        }

    }, [filterState])

    //creation de la liste des films, si pas de données on cree des placeholders
    

    films = [...filterState.films];
    //changer en fonction du count pour remplir
    //console.log("filter " + filter + " films " + films.length + " count " + count);
    //console.log("films before add", films, films.length, count);
    if (films.length != count) {
        for (let i = films.length; i < count; i++) {
            let f = { ...filmPlaceholder };
            f.id = i + UUID(i);
            //console.log("ajour dun placeholder");
            films.push(f);
        }
    }
    let currentCount = 0;
    //console.log("update filmList ", films);
    const filmsList = films.map((film) => {
        if (currentCount < count) {
            currentCount++;
            return (
                <Film 
                key={film.id} 
                id={film.id} 
                imdbTitle={film.imdbTitle} 
                title={film.title} 
                description ={film.description}
                poster={film.poster}
                rating={film.rating}
                genre={film.genre}
                ratingImdb={film.ratingImdb}
                votes={film.votes}
                />
            )

        }
    })
    let style ="films_box_" + bp;
    if (big)
    {
        style += "_big";
    }
    return (
            <div className={style}>
                <div className="films">
                    {filmsList}
                </div>
            </div>

    )
}

export default Films
