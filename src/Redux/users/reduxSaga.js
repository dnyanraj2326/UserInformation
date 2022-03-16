import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_ALL_USERS} from './actionTypes'
import {getUserSuccessful, userError } from './action';
import {UserApi} from '../../Api/UserApi';

export function* onLoadUserData() {
    try {
        const responce = yield call(UserApi);
        yield put(getUserSuccessful(responce.data));
    }
    catch (error) {
        yield put(userError(error));
    }
}

export function* onLoadUser() {
    yield takeLatest(GET_ALL_USERS, onLoadUserData);
}