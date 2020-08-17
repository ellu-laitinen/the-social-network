import React from 'react';
import PostDetails from '../Posts/PostDetails'

const PostSummary = (props) => {
    return (
        <div className="card post">
            <div className="card-title">{props.post.title}</div>
            <div className="card-content">{props.post.content}</div>
        </div>
    );
}

export default PostSummary;
