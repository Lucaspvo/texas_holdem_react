import AppView from '../views/App';
import { connect } from 'react-redux';
import deepmerge from 'deepmerge';

const mapStateToProps = state => {

  return deepmerge({}, state.app);

};

const mapDispatchToProps = dispatch => {

  return {



  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);
