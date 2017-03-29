import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';

function collect(monitor) {
  return {
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

class DraggedTabLayer extends Component {
  render() {
    const { item, currentOffset, isDragging } = this.props;
    if (!isDragging) return null;
    let style = {};
    if (!currentOffset) style = { display: 'none' };
    else {
      const { x, y } = currentOffset;
      style = { transform: `translate(${x}px, ${y}px)` };
    }
    const { name } = item;
    return (
      <div style={{ position: 'fixed', width: '100vw', height: '100vh', pointerEvents: 'none', top: 0, left: 0 }}>
        <button
          className="tab active"
          style={style}
        >
          {name}
        </button>
      </div>
    );
  }
}


DraggedTabLayer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    originalIndex: PropTypes.number,
  }),
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  isDragging: PropTypes.bool.isRequired,
};

DraggedTabLayer.defaultProps = {
  item: { name: '', originalIndex: '' },
  currentOffset: false,
};

export default DragLayer(collect)(DraggedTabLayer);
