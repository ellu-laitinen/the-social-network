import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './Components/Layout/NavBar'
import Feeds from './Components/HomePage/Feeds'
import NewPost from './Components/Posts/NewPost'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import NonRegisteredUserLinks from './Components/Layout/NonRegisteredUserLinks';
import RegisteredUserLinks from './Components/Layout/RegisteredUserLinks';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Feeds} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/non-registuser" component={NonRegisteredUserLinks} />
        <Route path="/regist-user" component={RegisteredUserLinks} />

      </Switch>


    </Router>


  );
}

export default App;
