import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// import components
import App from './components/app';
import Home from './components/pages/home';
import Catalog from './components/pages/catalog';
import Contact from './components/pages/contact';
import Error from './components/pages/error';

// include styles
import './styles/reset.css';
import './styles/styles.css';

ReactDOM.render(
      <Router history={browserHistory}>
          <Route component={App} path='/'>
              <IndexRoute component={Home}></IndexRoute>
              <Route component={Catalog} path='/catalog'></Route>
              <Route component={Contact} path='/contact'></Route>
          </Route>
          <Route component={Error} path='*'></Route>
      </Router>,
      document.getElementById('root')
);