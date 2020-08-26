import React from 'react';
import { NavLink } from 'react-router-dom'
import Firebase from 'firebase'

class PostSummary extends React.Component {


    render() {
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">{this.props.post.content}</div>
                <button className="btn">
                    <NavLink to="/posts/:postTitle">Read more</NavLink></button>
            </div>
        );
    }
}


export default PostSummary;
