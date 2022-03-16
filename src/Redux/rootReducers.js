import { combineReducers } from 'redux';
import reducers from './users/reducers';


const rootReducers = combineReducers({
    user: reducers,
});



export default rootReducers;