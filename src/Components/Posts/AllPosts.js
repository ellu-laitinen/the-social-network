import React from 'react';
import PostSummary from './PostSummary'
import { connect } from 'react-redux'
import { removePosts } from '../../store/actions/postActions'
import Firebase from 'firebase'


class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
    }

    componentDidMount = () => {
        Firebase.firestore().collection('posts').get()
            .then(resp => {
                this.setState({
                    posts: resp.docs
                })
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={() => this.props.removePosts(this.props.posts)}>Remove all posts</button>
                {
                    this.state.posts ?
                        this.state.posts.map(post =>
                            <PostSummary post={post.data()} key={post.index}></PostSummary>) :
                        'loading'}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePosts: () => {
            dispatch(removePosts())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
