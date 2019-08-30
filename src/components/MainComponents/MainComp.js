import React, { Component } from 'react';
import Form from './Form';
import Display from './Display';
import Error from './Error';

class MainComp extends Component {
  state = {
    isLoaded: false,
    error: false,
    city: '',
    temperature: '',
    description: '',
    sunrise: '',
    sunset: '',
    tempMin: '',
    tempMax: '',
    pressure: '',
    humidyty: '',
    visibility: '',
    wind: '',
  }



  handleChange = (e) => {
    this.setState({
      city: e.target.value,
      isLoaded: false,
      error: false,
    })
  }

  handleClear = (e) => {
    e.preventDefault();

    this.setState({
      city: '',
      isLoaded: false,
      error: false,
    })
  }

  handleFindCity = (e) => {
    e.preventDefault();

    if (this.state.city.length === 0) {
      return alert('Type some city...');
    }

    console.log(this.state.city)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=a9302906cfdb7f28449954dd9590d745&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          this.setState({
            error: true,
            isLoaded: false,
          })
        }

        throw Error('Something wrong')
      })
      .then(data => {
        // console.log(data)

        this.setState({
          isLoaded: true,
          error: false,
          temperature: Math.floor(data.main.temp),
          description: data.weather[0].description,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          pressure: data.main.pressure,
          humidyty: data.main.humidity,
          visibility: data.visibility,
          wind: data.wind.speed,
        })
      })
      .catch(err => console.log(err));
  }



  render() {
    const { error, city, isLoaded } = this.state;

    const returnError = () => {
      return (
        <Error />
      )
    }

    const returnDisplay = () => {
      if (isLoaded) {
        return (
          <Display {...this.state} />
        );
      } else {
        return (null);
      }
    }

    return (
      <main className="main">
        <section className="main__wrapper">

          <Form
            onChange={this.handleChange}
            onClear={this.handleClear}
            onFindCity={this.handleFindCity}
            city={city}
          />

          {/* <Display {...this.state} /> */}

          {/* <Error /> */}

          {error ? returnError() : returnDisplay()}


        </section>
      </main>
    );
  }
}

export default MainComp;