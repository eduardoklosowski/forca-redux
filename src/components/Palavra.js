import React, { PropTypes } from 'react';

const palavraToArray = (str) => {
  const array = [];
  let c;

  for (c of str) {
    array.push(c);
  }

  return array;
};

const Palavra = ({ vidas, palavra, letras }) => (
  <div className="palavra">
    <ul>
      {palavraToArray(palavra).map((l, i) => {
        if (l === ' ') {
          return <li key={i} className="espaco">&nbsp;</li>;
        }
        const acertada = letras.indexOf(l) >= 0;
        return (
          <li key={i} className={(!acertada && !vidas) ? 'faltou' : ''}>
            {(acertada || !vidas) ? l : '_'}
          </li>
        );
      })}
    </ul>
  </div>
);
Palavra.propTypes = {
  vidas: PropTypes.number.isRequired,
  palavra: PropTypes.string.isRequired,
  letras: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Palavra;
