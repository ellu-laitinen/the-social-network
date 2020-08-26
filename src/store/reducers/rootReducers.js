import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const initialState = {
    posts: [

    ],
    userData: {},
    userActionErr: null,
    loginStatus: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                userActionErr: action.error.code
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                loginStatus: true
            }

        default:
            return state;
    }
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.resp
            }

        case 'CREATE_NEW_POST':
            console.log('new post created')
            return state;

        case 'CREATE_NEW_POST_FAILED':
            return {
                ...state,
                userActionErr: action.err.message
            }
        case 'REMOVE_ALL_POSTS':
            console.log('deleted')
            return {
                ...state,
                posts: []
            }
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    auth: authReducer,
    post: postReducer,
    firebase: firebaseReducer
})

export default rootReducers;