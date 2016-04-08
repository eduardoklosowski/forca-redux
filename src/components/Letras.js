import React, { PropTypes } from 'react';

const Letras = ({ palavra, letras }) => (
  <div className="letras">
    <div className="title">Letras</div>
    <ul>
      {letras.map((l, i) => (
        <li key={i} className={palavra.indexOf(l) >= 0 ? 'certa' : 'errada'}>{l}</li>
      ))}
    </ul>
  </div>
);
Letras.propTypes = {
  palavra: PropTypes.string.isRequired,
  letras: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Letras;
