const currentTime = new Date();

const initialState = {
    posts: [

    ],
    userData: {},
    userActionErr: null
};

const rootReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'CREATE_NEW_POST':
            console.log('new post created')
            return state;

        case 'CREATE_NEW_POST_FAILED':
            return {
                ...state,
                userActionErr: action.err.message
            }
        case 'REMOVE_ALL_POSTS':
            return {
                posts: []
            }
        default:
            return state;
    }
}

export default rootReducers;