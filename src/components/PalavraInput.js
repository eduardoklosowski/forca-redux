import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPalavra } from '../actions/forca';

const mapDispatchToProps = (dispatch) => ({
  action: palavra => dispatch(setPalavra(palavra)),
});

let PalavraInput = ({ action }) => {
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
      <input ref={node => {input = node;}} type="text" placeholder="Digite uma palavra" />
      <button type="submit">Iniciar</button>
    </form>
  );
};
PalavraInput.propTypes = {
  action: PropTypes.func.isRequired,
};

PalavraInput = connect(undefined, mapDispatchToProps)(PalavraInput);

export default PalavraInput;
