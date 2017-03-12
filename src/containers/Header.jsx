import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, IndexedLink } from 'react-router';
import * as actions from '../actions/actions';

class Header extends Component {

  handleSignout() {
    this.props.signOutUser();
  }
  // we are returning and array of components
  // this is the only way to pass components without a wrapper used for list
  // it is not necesary to assign Link to signout since it would not redirect this is just used as button
  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1}>
          <Link to="/favorites">My Favorites</Link>
        </li>,
        <li key={2}>
          <a href="#" onClick={() => this.handleSignout()}>Sign Out</a>
        </li>
      ];
    } else {
      return [
        <li key={1}>
          <Link to="/login">Login</Link>
        </li>,
        <li key={2}>
          <Link to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <Link href="/">
                React2Gifs
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            { this.renderAuthLinks() }
          </ul>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  authenticated: false,
};

Header.propTypes = {
  authenticated: React.PropTypes.bool,
  signOutUser: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(Header);

