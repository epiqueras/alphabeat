import React, { PropTypes } from 'react';

const Window = ({ openLetter, keys }) => {
  const a = keys;
  return (
    <div className={`modal${openLetter ? ' open' : ''}`}>
      <div className="modal-icons"><div className="modal-close" /></div>
      MODAL{a.type}
    </div>
  );
};

Window.propTypes = {
  openLetter: PropTypes.string.isRequired,
  keys: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Window;
