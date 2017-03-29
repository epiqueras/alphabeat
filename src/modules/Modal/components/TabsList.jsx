import React, { PropTypes } from 'react';

const TabsList = ({ tabs }) => {
  return (
    <div>
      {tabs}
    </div>
  );
};

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default TabsList;
