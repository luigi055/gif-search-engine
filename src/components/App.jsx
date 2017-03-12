import React from 'react';

import Header from '../containers/Header';

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
