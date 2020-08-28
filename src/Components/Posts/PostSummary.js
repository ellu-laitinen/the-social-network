import React from 'react';
import { NavLink } from 'react-router-dom'
import Firebase from 'firebase'
/* import { getOnePost } from '../../store/actions/postActions'
 */import { connect } from 'react-redux';


class PostSummary extends React.Component {
    /* 
        componentDidMount = () => {
            this.props.getOnePost();
            console.log('fetched one')
        } */

    render() {
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">{this.props.post.content}</div>
                {/* <div className="card-content">{this.props.post.content}</div> */}
                <button className="btn">
                    <NavLink to="/post">Read more</NavLink></button>
                {/*  {this.props.posts.map(post =>
                    <PostCard title={post.data()} content={post.data()}></PostCard>
                )} */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        getOnePost: () => {
            dispatch(getOnePost())
        }
    }
} */

export default connect(mapStateToProps,/*  mapDispatchToProps */)(PostSummary);
