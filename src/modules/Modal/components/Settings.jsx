import React, { PropTypes } from 'react';

import Slider from './Slider';

import { soundConfig, effectConfigs } from '../../soundConfigs';

const Settings = ({
  openName,
  openConfig,
  doUpdateLetterSound,
  doUpdateLetterEffect,
  doDeleteOpenEffect,
}) => {
  const isSound = openName === 'sound';
  const range = isSound ? soundConfig : effectConfigs[openName];

  const sliders = openConfig ? Object.keys(openConfig.config || openConfig).filter(configKey => configKey !== 'effects')
    .map(configKey => (
      <Slider
        key={configKey}
        name={configKey}
        value={isSound ? openConfig[configKey] : openConfig.config[configKey]}
        min={configKey === 'type' ? 0 : range[configKey].min}
        max={configKey === 'type' ? 100 : range[configKey].max}
        options={configKey === 'type' ? range.type.options : []}
        doUpdate={isSound ? doUpdateLetterSound : doUpdateLetterEffect}
      />
    )) : '';
  return (
    <div className="settings">
      {!isSound ? <button className="delete-button" onClick={doDeleteOpenEffect}>delete</button> : ''}
      {sliders}
    </div>
  );
};

Settings.propTypes = {
  openName: PropTypes.string.isRequired,
  openConfig: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  doUpdateLetterSound: PropTypes.func.isRequired,
  doUpdateLetterEffect: PropTypes.func.isRequired,
  doDeleteOpenEffect: PropTypes.func.isRequired,
};

export default Settings;
