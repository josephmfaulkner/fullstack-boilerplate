import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS } from '../actions/actionTypes';
import { setPosts } from '../actions/Posts';
import { getPosts } from '../../api/posts';



function* fetchPosts(action) {
    try {
        const posts = yield call(getPosts);
        yield put(setPosts(posts));
     } catch (error) {
        console.error(error);
     }

}

function* mainSaga() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default mainSaga;