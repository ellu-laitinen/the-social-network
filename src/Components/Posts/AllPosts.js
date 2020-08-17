import React from 'react';
import PostSummary from './PostSummary'
import Firebase from 'firebase'

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
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
                {
                    this.state.posts ?
                        this.state.posts.map(post => <PostSummary post={post.data()} key={post.index}></PostSummary>) :
                        'loading'}

            </div>
        );
    }
}


export default AllPosts;
