import React from 'react'

import Films from './Films.js';

const MainContent = ({ loaded, films, error }) => {
    if (!loaded) {
        return (
            <div>
                <h1>Chargement...</h1>
            </div>
        )
    }
    else {
        if (error != "") {
            return (
                <div>
                    <p>erreur ! : {error}</p>
                </div>
            ) 
        }
        else {


            return (
                <div>
                    chargé
                    <Films films={films} count="3" />
                </div>
            )
        }
    }
}

export default MainContent
