import { combineReducers} from  'redux';
import products from './products';
import users from './users';

const appReducers = combineReducers({
    products,
    users
})

export default appReducers;