import React, { Component } from 'react';
import HeaderComp from './HeaderComp';
import MainComp from './MainComp';
import FooterComp from './FooterComp';


class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderComp />
        <MainComp />
        <FooterComp />
      </div>
    );
  }
}

export default App;