import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router'


import { FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from '../actions/actionTypes';
import { setPosts } from '../actions/Posts';
import { getPosts, addPost, updatePost, deletePost } from '../../api/posts';



function* fetchPosts(action) {
    try {
        const posts = yield call(getPosts);
        yield put(setPosts(posts));
     } catch (error) {
        console.error(error);
     }

}

function* addPostCall(action){
  try{
    yield call(addPost, action.payload);
    yield put(push('/'));
  } catch (error) {
    console.error(error);
  }
}

function* editPostCall(action){
  yield call(updatePost, action.payload.id, action.payload);
  yield put(push('/'));
  console.log(action);
}

function* deletePostCall(action){
  yield call(deletePost, action.payload.id);
  yield put(push('/'));
  console.log(action);
}

function* mainSaga() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
  yield takeLatest(ADD_POST,    addPostCall);
  yield takeLatest(EDIT_POST,   editPostCall);
  yield takeLatest(DELETE_POST, deletePostCall);
}

export default mainSaga;