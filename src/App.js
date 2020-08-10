import React from 'react';
import './App.css';
import NavBar from './Components/Layout/NavBar'
import Feeds from './Components/HomePage/Feeds'
import NewPost from './Components/Posts/NewPost'

function App() {
  return (
    <div>
      <NavBar />
      <Feeds />
      <NewPost />
    </div>


  );
}

export default App;
