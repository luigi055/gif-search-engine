import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Favorites from '../containers/Favorites';
// you'll need to be authenticated to can acces. if not signin this HOC will redirect you to login
import RequireAuth from '../containers/RequireAuth'; 


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="favorites" component={RequireAuth(Favorites)} />
  </Route>
);