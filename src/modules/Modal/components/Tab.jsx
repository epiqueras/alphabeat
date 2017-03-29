import React, { PropTypes } from 'react';

const Tab = ({ active, name, doChangeTab }) => {
  function tabClickHandler() {
    doChangeTab(name);
  }

  return (
    <button className={`tab${active ? ' active' : ''}`} onClick={tabClickHandler}>{name}</button>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  doChangeTab: PropTypes.func.isRequired,
};

export default Tab;
