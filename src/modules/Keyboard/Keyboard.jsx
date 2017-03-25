import { connect } from 'react-redux';

import { toggleBoard } from './components/boardActions';
import { getBoardIsOpen } from './keyboardReducer';

import Board from './components/Board';

function mapStateToProps(state) {
  return {
    boardIsOpen: getBoardIsOpen(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doToggleBoard: () => dispatch(toggleBoard()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
