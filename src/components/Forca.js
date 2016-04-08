import React, { PropTypes } from 'react';

const Forca = ({ vidas }) => (
  <div className="forca">
    Vida: {vidas}
  </div>
);
Forca.propTypes = {
  vidas: PropTypes.number.isRequired,
  completo: PropTypes.bool.isRequired,
};

export default Forca;
