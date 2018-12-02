import {
  actionOnClick
} from '../actionCreators/Home';
import HomeView from '../views/Home';
import { connect } from 'react-redux';
import deepmerge from 'deepmerge';

const mapStateToProps = state => {

  return deepmerge({}, state.home);

};

const mapDispatchToProps = dispatch => {

  return {

    onClick(e) {

      e.preventDefault();

      dispatch(actionOnClick(e.target.value));

    },

    redirectToGamePage: function(e) {

      e.preventDefault();

      this.props.history.push('/game');

    },

  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
