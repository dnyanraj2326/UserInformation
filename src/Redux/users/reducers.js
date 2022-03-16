import {
  GET_ALL_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESSFUL,
} from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  users: [],
  errors: null,
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
