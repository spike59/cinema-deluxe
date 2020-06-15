import React from 'react';
import Header from './components/Header.jsx';

import Films from './components/Films.jsx';

import Footer from './components/Footer.jsx';
//import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Films></Films>
      <Footer></Footer>
    </div>
  );
}

export default App;
