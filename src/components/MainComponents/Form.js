import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.onFindCity} className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Type city name..."
        value={props.city}
        onChange={props.onChange}
      />

      <button className="form__btn">Find city</button>

      <button
        className="form__btn"
        onClick={props.onClear}
      >Clear</button>
    </form>
  );
}

export default Form;