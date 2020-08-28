export const removePosts = () => ({ type: 'REMOVE_ALL_POSTS' })


export const createPost = function (post) {
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').add(post)
            .then(() => {
                console.log('new post added')
                dispatch({ type: 'CREATE_NEW_POST' })
            }).catch(err => {
                dispatch({ type: 'CREATE_NEW_POST_FAILED', err: err })
            })
    };
}

export const getPosts = () => {
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').get()
            .then(resp => {
                dispatch({
                    type: 'FETCHED_POSTS_SUCCESS',
                    resp: resp.docs
                })
            }).catch(err => {
                dispatch({ type: 'FETCHED_POSTS_FAIL', err: err })
            })
    };

}

/* export const getOnePost = (id) => {
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').doc(id).get()
            .then(resp => {
                dispatch({
                    type: 'FETCHED_ONE_POST',
                    resp: resp.docs
                })
            }).catch(err => {
                dispatch({ type: 'FETCH_ONE_POST_FAIL', err: err })
            })
    }
} */