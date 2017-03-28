import { connect } from 'react-redux';

import { toggleBoard } from './keyboardActions';
import { getBoardIsOpen } from './keyboardReducer';

import { toggleModal } from '../Modal/modalActions';

import Board from './components/Board';

function mapStateToProps(state) {
  return {
    boardIsOpen: getBoardIsOpen(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doToggleBoard: isOpen => dispatch(toggleBoard(isOpen)),
    doToggleModal: letter => dispatch(toggleModal(letter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
