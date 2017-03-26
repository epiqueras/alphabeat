import { connect } from 'react-redux';

import { toggleBoard } from './keyboardActions';
import { getBoardIsOpen } from './keyboardReducer';

import Board from './components/Board';

function mapStateToProps(state) {
  return {
    boardIsOpen: getBoardIsOpen(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doToggleBoard: isOpen => dispatch(toggleBoard(isOpen)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
