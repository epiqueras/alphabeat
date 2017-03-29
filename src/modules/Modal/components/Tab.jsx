import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

const tabSource = {
  beginDrag(props) {
    return {
      name: props.name,
      originalIndex: props.findTab(props.name).tabIndex,
    };
  },

  endDrag(props, monitor) {
    const { name: droppedName, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) { // If the tab was dropped outside the tab list, cancel the move
      props.doMoveLetterEffect(droppedName, originalIndex);
    }
  },
};

const tabTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { name: draggedName } = monitor.getItem();
    const { name: overName } = props;

    if (draggedName !== overName) {
      const { tabIndex: overIndex } = props.findTab(overName);
      props.doMoveLetterEffect(draggedName, overIndex);
    }
  },
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  componentDidMount() {
    const { connectDragPreview } = this.props;
    connectDragPreview(getEmptyImage());
  }

  tabClickHandler() {
    const { name, doChangeTab } = this.props;
    doChangeTab(name);
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      active,
      name,
    } = this.props;

    return connectDragSource(connectDropTarget(
      <button
        className={`tab${active ? ' active' : ''}${isDragging ? ' dragging' : ''}`}
        onClick={this.tabClickHandler}
      >
        {name}
      </button>,
    ));
  }
}

Tab.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  findTab: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  doChangeTab: PropTypes.func.isRequired,
  doMoveLetterEffect: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default DropTarget('Tab', tabTarget,
  collectTarget)(DragSource('Tab', tabSource, collectSource)(Tab));
