import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addLetra } from '../actions/forca';

const mapDispatchToProps = (dispatch) => ({
  action: letra => dispatch(addLetra(letra)),
});

let LetraInput = ({ action }) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (value) {
      action(value);
      input.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={node => {input = node;}} type="text" placeholder="Letra" maxLength="1" />
      <button type="submit">Jogar</button>
    </form>
  );
};
LetraInput.propTypes = {
  action: PropTypes.func.isRequired,
};

LetraInput = connect(undefined, mapDispatchToProps)(LetraInput);

export default LetraInput;
