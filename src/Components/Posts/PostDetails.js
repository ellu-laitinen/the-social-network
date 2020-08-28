import React from 'react';
import { connect } from 'react-redux'
import './PostDetails.css'

class PostDetails extends React.Component {
    render() {
        return (
            <div >
                <h5>Post title: {this.props.title}</h5>
                <p>Post Content: {this.props.content}</p>

            </div>
        );
    }
}

/* export default PostDetails; */

/* import React from 'react';
import Firebase from 'firebase'
import { connect } from 'react-redux'

import PostCard from './PostCard'

class PostDetails extends React.Component {


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
                console.log(resp.docs[0].data().title)


            })
            .catch(err => {
                console.log(err.message);
            });
    }
    render() {
        return (
            <div> {this.state.posts.map(post =>
                <PostCard post={post.data()} key={post.id}></PostCard>)
            }
            </div>
        );
    }
}
*/
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostDetails);  
