import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Start from './components/start.jsx';
import BeforeEasy from './components/beforeEasy.jsx';
import BeforeAdvanced from './components/beforeAdvanced.jsx';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className='ui container'>

            <Route path='/start'>
              <div></div>
              <div className="ui raised segment"><Start/></div>
            </Route>

            <Route path='/beforeEasy'>
              <div></div>
              <div className="ui raised segment"><BeforeEasy/></div>
            </Route>

            <Route path='/beforeAdvanced'>
              <div></div>
              <div className="ui raised segment"><BeforeAdvanced/></div>
            </Route>

        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
