import React from 'react';

class PostCard extends React.Component {

    render() {


        return (
            <div>
                Title: {this.props.post.title}
            Content: {this.props.post.content}

            </div>
        );
    }
}

export default PostCard;
