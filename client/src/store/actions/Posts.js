import { FETCH_POSTS, SET_POSTS } from "./actionTypes";

export const fetchPosts = () => ({
    type: FETCH_POSTS,
    payload: ''
});

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});