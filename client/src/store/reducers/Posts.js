import { SET_POSTS } from '../actions/actionTypes';

const initialState = {
    posts: []
};

export default function(state = initialState, action){
    switch(action.type) {
        case SET_POSTS: {
            const newPosts = action.payload; 
            let newState = { posts: newPosts };
            return newState;
        }
        default: return state; 
    }
}