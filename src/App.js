import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './Components/Layout/NavBar'
import Feeds from './Components/HomePage/Feeds'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import PostDetails from './Components/Posts/PostDetails';
import RegisteredUserLinks from './Components/Layout/RegisteredUserLinks';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Feeds />
        <Switch >
          <Route path="/" exact component={Feeds} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:id" component={PostDetails} />

        </Switch>
      </div>

    </Router>


  );
}

export default App;
