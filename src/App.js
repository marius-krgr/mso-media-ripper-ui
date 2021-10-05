import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ActionButton from './components/ActionButton.jsx';
import Start from './components/start.jsx';


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className='ui container'>
          <div className='ui menu'>
            <div className="header item">Toolbar</div>
            <Link to='/start' className="item">Startseite</Link>
            <Link to='/actionButton' className="item">Action Button</Link>
          </div>

          <div className="ui segment">
            <Route path='/start'>
              <h1>Startseite</h1>
              <div className="ui raised segment"><Start/></div>
            </Route>
          </div>
          <div className="ui segment">
            <Route path='/actionButton'>
              <h1>Action Buttons!</h1>
              <div className="ui raised segment"><ActionButton/></div>
            </Route>
          </div>

        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
