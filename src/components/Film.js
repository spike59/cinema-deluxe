import React, { useState, useEffect } from 'react'
import unirest from 'unirest';

const Film = ({ id, name }) => {
    const realId = id.split("/")[2];
    console.log("REALID", realId);
    const initialFilmState = {
        loaded: false,
        realId: realId,
        filmData: {}
    }
    const [filmState, setFilmState] = useState(initialFilmState);

    useEffect(() => {
        console.log("filmstate.loaded", filmState.loaded);
        if (!filmState.loaded) {
            async function loading_film() {
                //await sendRequest(filmState.realId);
            };
            loading_film();
        }

    }, [filmState])

    function sendRequest(realId) {
        const req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-overview-details");

        req.query({
            "tconst": realId
        });

        req.headers({
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "7d89664ebfmshd558e519380373fp1c21d3jsncbcdc7d62050"
        });


        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log("film loaded", res.body);
            const filmState = {
                loaded: true,
                realId: realId,
                filmData: res.body
            }
            setFilmState(filmState);
            //console.log(res.body);
        });
    }

    if (!filmState.loaded) {
        return (
            <p>chargement...</p>
        )
    }
    else {
        const f = filmState.filmData;
        return (
            <div>
                <h1>{f.title.title}</h1>
                <p>id:{id}</p>
                <p>name:{name}</p>
            </div>
        )
    }
}

export default Film;
