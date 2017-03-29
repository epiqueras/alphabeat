import React, { PropTypes } from 'react';

import Tab from './Tab';
import TabsList from './TabsList';

const Window = ({ openLetter, letterConfig, openTab, doToggleModal, doChangeTab }) => {
  function closeClickHandler() {
    doToggleModal('');
  }

  let i = 0;
  const tabs = letterConfig.effects ? letterConfig.effects.map((effect) => {
    i += 1;
    return (
      <Tab key={i} active={openTab === effect.name} name={effect.name} doChangeTab={doChangeTab} />
    );
  }) : '';
  return (
    <div className={`modal${openLetter ? ' open' : ''}`}>
      <div className="modal-icons">
        <button className="modal-close" onClick={closeClickHandler} />
      </div>
      <div className="tabs">
        <Tab active={openTab === 'sound'} name="sound" doChangeTab={doChangeTab} />
        <TabsList tabs={tabs} />
        <button className="tab add-effect">+</button>
      </div>
    </div>
  );
};

Window.propTypes = {
  openLetter: PropTypes.string.isRequired,
  letterConfig: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  openTab: PropTypes.string.isRequired,
  doToggleModal: PropTypes.func.isRequired,
  doChangeTab: PropTypes.func.isRequired,
};

export default Window;
