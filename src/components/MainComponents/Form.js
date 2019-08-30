import React, { Component } from 'react';

class Form extends Component {
  state = {
    city: 'warszawa'
  }

  render() {
    return (
      <form className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Type city name..."
        />

        <button className="form__btn">Find city</button>
        <button className="form__btn">Clear</button>
      </form>
    );
  }
}

export default Form;