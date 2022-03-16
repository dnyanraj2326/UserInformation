import { GET_ALL_USERS, GET_USERS_ERROR, GET_USERS_SUCCESSFUL } from "./actionTypes"

export const getUser = () => ({
        type: GET_ALL_USERS,
});

export const getUserSuccessful = (users) => ({
        type: GET_USERS_SUCCESSFUL,
        payload: users,
});

export const userError = (error) => ({
    type: GET_USERS_ERROR,
    payload:error,
})