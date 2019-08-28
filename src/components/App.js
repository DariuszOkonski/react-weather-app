import React, { Component } from 'react';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">
            weather app
          </h1>
        </header>

        <main className="main">
          <section className="main__wrapper">

            <form className="form">
              <input type="text" className="form__input" placeholder="Type city name..." />
              <button className="form__btn">Find city</button>
              <button className="form__btn">Clear</button>
            </form>

            <div className="display">
              <p className="display__temperature">27&#176;C</p>
              <p className="display__city">Katowice</p>
              <p className="display__description">Clear sky</p>
              <p className="display__data">Sunrise: 07.25</p>
              <p className="display__data">Sunset: 18.26</p>
              <p className="display__data">Temp min: 17&#176;C</p>
              <p className="display__data">Temp max: 21&#176;C</p>
              <p className="display__data">Press.: 1024 hPa</p>
              <p className="display__data">Humidyty: 72%</p>
              <p className="display__data">Visibility: 10km</p>
              <p className="display__data">Wind: 1m/s</p>
            </div>

            {/* <div className="display">
              <p className="display__error">
                No Data Found
              </p>
            </div> */}

          </section>
        </main>

        <footer className="footer">
          <p className="footer__paragraph">
            Weather App &#169; 2019 All Rights Reserved
          </p>
        </footer>
      </div>
    );
  }
}

export default App;