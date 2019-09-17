import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friends' component={FriendList} />
    </div>
  );
}

export default App;
