import React, { Component, PropTypes } from 'react';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Tab from './Tab';
import DraggedTabLayer from './DraggedTabLayer';

const tabTarget = {
  drop() {
  },
};

function collect(connectDragAndDrop) {
  return {
    connectDropTarget: connectDragAndDrop.dropTarget(),
  };
}

class TabsList extends Component {
  constructor(props) {
    super(props);
    this.findTab = this.findTab.bind(this);
  }

  findTab(tabName) {
    const { letterConfig } = this.props;
    const tab = letterConfig.effects.find(effect => effect.name === tabName);
    return {
      tab,
      tabIndex: letterConfig.effects.indexOf(tab),
    };
  }

  render() {
    const {
      connectDropTarget,
      letterConfig,
      openTab,
      doChangeTab,
      doMoveLetterEffect,
    } = this.props;
    let i = 0;
    const tabs = letterConfig.effects ? letterConfig.effects.map((effect) => {
      i += 1;
      return (
        <Tab
          key={i}
          active={openTab === effect.name}
          name={effect.name}
          findTab={this.findTab}
          doChangeTab={doChangeTab}
          doMoveLetterEffect={doMoveLetterEffect}
        />
      );
    }) : '';
    return connectDropTarget(<div className="scrollable-tabs">{tabs}<DraggedTabLayer /></div>);
  }
}

TabsList.propTypes = {
  openTab: PropTypes.string.isRequired,
  letterConfig: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  connectDropTarget: PropTypes.func.isRequired,
  doChangeTab: PropTypes.func.isRequired,
  doMoveLetterEffect: PropTypes.func.isRequired,
};

export default
  DragDropContext(HTML5Backend)(DropTarget('Tab', tabTarget, collect)(TabsList));
