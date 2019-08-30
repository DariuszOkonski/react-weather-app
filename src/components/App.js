import React from 'react';
import HeaderComp from './HeaderComp';
import MainComp from './MainComp';
import FooterComp from './FooterComp';


const App = () => {
  return (
    <div className="app">
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </div>
  );
}

export default App;