import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPalavra } from '../actions/forca';
import { toggleEscondePalavra } from '../actions/opcoes';

const mapStateToProps = (state) => ({
  escondePalavra: state.opcoes.escondePalavra,
});

const mapDispatchToProps = (dispatch) => ({
  action: palavra => dispatch(setPalavra(palavra)),
  toggleEsconde: () => dispatch(toggleEscondePalavra()),
});

let PalavraInput = ({ escondePalavra, action, toggleEsconde }) => {
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
      <input
        ref={node => {input = node;}}
        type={escondePalavra ? 'password' : 'text'}
        placeholder="Digite uma palavra"
      />
      <button type="submit">Iniciar</button>
      <label>
        <input type="checkbox" onChange={toggleEsconde} checked={escondePalavra} />
        Esconder Palavra?
      </label>
    </form>
  );
};
PalavraInput.propTypes = {
  escondePalavra: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  toggleEsconde: PropTypes.func.isRequired,
};

PalavraInput = connect(mapStateToProps, mapDispatchToProps)(PalavraInput);

export default PalavraInput;
