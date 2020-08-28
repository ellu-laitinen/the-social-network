import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './Components/Layout/NavBar'
import Feeds from './Components/HomePage/Feeds'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import PostCard from './Components/Posts/PostCard';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null
    }
  }
  componentDidMount = () => {
    this.setState({
      uid: Firebase.auth().currentUser ? Firebase.auth().currentUser.uid : null
    });

    Firebase.auth().onAuthStateChanged(user => {
      if (user && this.state.uid === null) {
        this.setState({
          uid: user.uid
        })
      } else if (!user && this.state.uid !== null) {
        this.setState({
          uid: null
        })
      }

    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar uid={this.state.uid} />

            <Switch >
              <Route exact path="/" render={() => {
                return <Feeds uid={this.state.uid} />
              }}></Route>
              <Route exact path="/logout" render={() => {
                return <Logout uid={this.state.uid} />
              }} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route exact path="/create" render={() => {
                return <NewPost uid={this.state.uid} />
              }}></Route>
              <Route path="/post" render={() => {
                return <PostCard uid={this.state.uid} title={this.props.title} />
              }}></Route>

            </Switch>
          </div>
        </div>

      </Router>


    );
  }
}



export default App;


