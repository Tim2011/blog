import React from 'react';
import {Router, Route} from 'react-router';
import {Gallery} from 'modules/gallery';
import {Home} from 'modules/home';
import {List} from 'modules/list';

const App = ({
  history,
}) => {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/list" component={List} />
      <Route path="/gallery" component={Gallery} />
    </Router>
  );
}

export default App;
