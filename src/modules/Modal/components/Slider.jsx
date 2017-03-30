import React, { Component, PropTypes } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      textValue: '',
    };
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }


  handleSliderChange(event) {
    const value = event.target.valueAsNumber;
    const { name, options, max, doUpdate } = this.props;

    if (options.length > 0) {
      let index = Math.floor(value / (max / options.length));
      index = index > options.length - 1 ? options.length - 1 : index;
      this.setState({ value, textValue: options[index] });
      doUpdate(name, options[index]);
    } else {
      this.setState({ value });
      doUpdate(name, value);
    }
  }

  render() {
    const { name, min, max } = this.props;
    const { value, textValue } = this.state;
    return (
      <div className="setting">
        <label htmlFor={name}>{name}: <span>{textValue || value}</span></label>
        <br />
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={this.handleSliderChange}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  min: PropTypes.node.isRequired,
  max: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  doUpdate: PropTypes.func.isRequired,
};

export default Slider;
