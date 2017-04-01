import React, { Component, PropTypes } from 'react';

import { playSound, parseKeys, updateSounds } from '../soundUtils';

class Input extends Component {
  constructor(props) {
    super(props);
    const { keys } = props;
    this.state = {
      input: 'Hello World',
      sounds: parseKeys(keys),
    };
    this.handleInput = this.handleInput.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.onKeysUpdate = this.onKeysUpdate.bind(this);

    this.playMusic();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keys !== this.props.keys) {
      this.onKeysUpdate();
    }
  }

  onKeysUpdate() {
    this.setState({ sounds: updateSounds(this.props.keys, this.state.sounds) });
  }

  async playMusic() {
    let index = 0;
    while (true) { // eslint-disable-line
      if (index >= this.state.input.length) index = 0;
      if (this.state.input.length === 0 || !this.props.isPlaying) await playSound(null, 1000);
      else {
        let letter = this.state.input[index];
        letter = /\s/.test(letter) ? 'space' : letter.toLowerCase();
        if (this.props.keys[letter]) {
          const { duration, rest } = this.props.keys[letter];
          await playSound(this.state.sounds[letter].sound, duration, rest);
        }
        index += 1;
      }
    }
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  playOrPause() {
    const { isPlaying, doTogglePlaying } = this.props;
    doTogglePlaying(!isPlaying);
  }

  render() {
    const { input } = this.state;
    const { isPlaying } = this.props;
    return (
      <div>
        <a href="/"><div className={`title${isPlaying ? ' title-dance' : ''}`}>Alphabeat</div></a>
        <button className={`play-pause${isPlaying ? ' paused' : ''}`} onClick={this.playOrPause}>{isPlaying ? '\u258C\u258C' : '\u25B6'}</button>
        <textarea className="text-input" value={input} onChange={this.handleInput} />
      </div>
    );
  }
}

Input.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  keys: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  doTogglePlaying: PropTypes.func.isRequired,
};

export default Input;
