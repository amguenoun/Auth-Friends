import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={LoginForm} />
    </div>
  );
}

export default App;
