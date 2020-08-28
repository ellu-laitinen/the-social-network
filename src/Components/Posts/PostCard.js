import React from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/postActions'
import PostDetails from '../Posts/PostDetails'

class PostCard extends React.Component {
    componentDidMount = () => {
        this.props.getPosts();
    }


    render() {


        return (
            <div>
                {this.props.posts.map(post =>
                    <PostDetails title={post.data().title} content={post.data().content} key={post.id} />)}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(getPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
