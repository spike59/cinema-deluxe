//lib
import React, { useState, useEffect } from 'react';
import unirest from 'unirest';
//components
import Header from './components/Header.js';
import StrapiContent from './components/StrapiContent.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
//data
import films from './data/films.json';


function App() {
  const initialState = {
    loaded: false,
    films: [],
    error:""
  }
  const [state, setState] = useState(initialState);



  useEffect(() => {
    console.log("state.loaded", state.loaded);
    if (!state.loaded) {
      async function loading_films() {
        await getImdbTopRatedMovies();
      };
      loading_films();
    }

  }, [state])

  function getImdbTopRatedMovies(title) {
    const req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-top-rated-movies");

    req.query({
      "page": "1",
      "r": "json",
      "s": title
    });

    req.headers({
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "7d89664ebfmshd558e519380373fp1c21d3jsncbcdc7d62050"
    });


    req.end(function (res) {
      let state;
      if (res.error) {
        //throw new Error(res.error);
        state = {
          loaded: true,
          films: [],
          error:"erreur de chargement api imdb"
        }
      }
      else {
        console.log("films loaded", res.body);
        state = {
          loaded: true,
          films: res.body
        }
        
        //console.log(res.body);
      }
      setState(state);
    });
  }

  return (
    <div className="App">
      <Header />
      <StrapiContent/>
      <MainContent loaded={state.loaded} films={state.films} error={state.error}/>
      <Footer />
    </div>
  );
}

export default App;
