import React from 'react';
import { NavLink } from 'react-router-dom'

class PostSummary extends React.Component {
    render() {
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">{this.props.post.content}</div>
                <button className="btn">
                    <NavLink to="/posts/:id">Read more</NavLink></button>
            </div>
        );
    }
}


export default PostSummary;
