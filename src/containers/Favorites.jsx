import React from 'react';
import { connect } from 'react-redux';

import RequireAuth from '../containers/RequireAuth';

class Favorites extends React.Component {
  render() {
    return <div>My Favorites</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  }
}
export default connect(mapStateToProps)(Favorites);
