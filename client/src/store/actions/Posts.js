import { FETCH_POSTS, SET_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from "./actionTypes";

export const fetchPosts = () => ({
    type: FETCH_POSTS,
    payload: ''
});

export const addPost = (title, description) => ({
  type: ADD_POST,
  payload: {
    title,
    description
  }
});

export const editPost = (id, title, description) => ({
  type: EDIT_POST, 
  payload: {
    id,
    title,
    description
  }
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id
  }
})

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});