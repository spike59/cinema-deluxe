//lib
import React, { useState, useEffect } from 'react';
import unirest from 'unirest';
//components
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import initStorage from './functions/initStorage.js';



function App() {
  //initStorage();
  // const initialState ={
  //   loade:false,
  //   films:[],
  //   filters:{},
  //   updateTime:Time.now(),
  //   errors:[],
  //   warnings:[]
  // }
  // const [state,setState]=useState(initialState);
  // if (localStorage.getItem("cinema-deluxe"))
  // {
  //   //on a des données deja on verifie pour mis a jour
  // }
  // else
  // {
  //   //on va chercher les données sur strapi
  // }
  return (
    <div className="App">
      <Header />
      {/* <MainContent loaded={state.loaded} films={state.films} filters={state.filters}/> */}
      <MainContent/>
      <Footer />
    </div>
  );
}

export default App;
