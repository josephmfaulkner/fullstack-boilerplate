import { SET_POSTS } from '../actions/actionTypes';

const initialState = {
    posts: [
        {
          title: 'PDF Document'
        },
        {
          title: 'Family Photo'
        }
    ]
};

export default function(state = initialState, action){
    switch(action.type) {
        case SET_POSTS: {
            const { newPosts } = action.payload; 
            return { posts: newPosts }
        }
        default: return state; 
    }
}