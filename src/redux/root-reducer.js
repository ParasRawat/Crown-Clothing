import {combineReducers} from 'redux'
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'

//this is what the state looks like ... its a super state 
export default combineReducers({
    user: userReducer,
    cart: cartReducer

});