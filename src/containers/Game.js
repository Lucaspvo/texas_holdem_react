import {
  actionStartingGame
} from '../actionCreators/Game';
import GameView from '../views/Game';
import { connect } from 'react-redux';
import deepmerge from 'deepmerge';

const mapStateToProps = state => {

  return deepmerge({}, state.game);

};

const mapDispatchToProps = dispatch => {

  return {

    startingGame() {

      dispatch(actionStartingGame());

    },

  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView);
