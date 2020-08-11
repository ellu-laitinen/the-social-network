import React from 'react';
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications'

const Feeds = () => {
    return (
        <div className="container">
            <h1>Feed</h1>
            <AllPosts />
            <Notifications />

        </div>
    );
}

export default Feeds;
