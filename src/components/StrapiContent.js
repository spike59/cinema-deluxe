import React, { useState,useEffect } from 'react'
import getStrapiMovies from '../functions/getStrapiMovies.js';

import Films from './Films.js';
const StrapiContent = () => {
    
    const initialStrapiState = {
        loaded: false,
        films: [],
        error: ""
    }

    const [strapiState, setStrapiState] = useState(initialStrapiState);

    useEffect(() => {
        console.log("strapiState.loaded", strapiState.loaded);
        if (!strapiState.loaded) {
            async function loading_strapi_films() {
                let r = await getStrapiMovies();
                console.log("R",r);
                setStrapiState(r);
            };
            loading_strapi_films();
        }

    }, [strapiState])


    if (!strapiState.loaded) {
        return (
            <div>
                chargement strapi
            </div>
        )
    }
    else {
        return (
            <div>
                <p>strapi chargé!</p>
                <Films films={strapiState.films} count="1" />
            </div>
        )
    }

}

export default StrapiContent
