import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './Components/Layout/NavBar'
import Feeds from './Components/HomePage/Feeds'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import PostDetails from './Components/Posts/PostDetails';
import NewPost from './Components/Posts/NewPost';
import Firebase from 'firebase'
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig'


// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

const database = Firebase.firestore();

database.collection('posts').get()
  .then(resp => {
    console.log(resp.docs[0].data())
    console.log(resp.docs[1].data().title)
    console.log(resp)
  })
  .catch(err => {
    console.log(err)
  })

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavBar />

          <Switch >
            <Route path="/" exact component={Feeds} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/create" component={NewPost} />
            <Route path="/posts/:id" component={PostDetails} />

          </Switch>
        </div>
      </div>

    </Router>


  );
}

export default App;
