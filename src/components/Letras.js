import React, { PropTypes } from 'react';

const Letras = ({ palavraLimpa, letras }) => (
  <div className="letras">
    <div className="title">Letras</div>
    <ul>
      {letras.map((l, i) => (
        <li key={i} className={palavraLimpa.indexOf(l) >= 0 ? 'certa' : 'errada'}>{l}</li>
      ))}
    </ul>
  </div>
);
Letras.propTypes = {
  palavraLimpa: PropTypes.string.isRequired,
  letras: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Letras;
