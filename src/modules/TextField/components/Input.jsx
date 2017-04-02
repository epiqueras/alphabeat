/* global window */
/* global document */
import React, { Component, PropTypes } from 'react';

import { playSound, parseKeys, updateSounds } from '../soundUtils';
import getUrlParameter, { encodeKeys } from '../../urlUtils';

class Input extends Component {
  constructor(props) {
    super(props);
    const { keys } = props;
    this.state = {
      input: getUrlParameter('t') || 'Hello World',
      sounds: parseKeys(keys),
    };
    this.handleInput = this.handleInput.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.onKeysUpdate = this.onKeysUpdate.bind(this);
    this.copyConfig = this.copyConfig.bind(this);

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

  copyConfig() {
    const { input } = this.state;
    const { keys } = this.props;

    const url = `${window.location.origin}${window.location.pathname}?t=${input}&c=${encodeKeys(JSON.stringify(keys))}`;

    const textArea = document.createElement('textarea');

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  render() {
    const { input } = this.state;
    const { isPlaying } = this.props;
    return (
      <div>
        <a href="/"><div className={`title${isPlaying ? ' title-dance' : ''}`}>Alphabeat</div></a>
        <button className={`play-pause${isPlaying ? ' paused' : ''}`} onClick={this.playOrPause}>{isPlaying ? '\u258C\u258C' : '\u25B6'}</button>
        <button className="share" onClick={this.copyConfig}>share</button>
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
