import {createStore, applyMiddleware} from 'redux'

/**
 * MIDDLEWARE IS FUNCTION THAT RECIEVE ACTION AND DO SOMETHING AND PASS THEM TO ROOT THE REDUCER
 * FUNCTIONS ARE CAPTURED HERE BEFORE THEY ARE PASSED TO ROOT REDUCER 
 * 
 */

 import logger from 'redux-logger'
 import rootReducer from './root-reducer'

 //SETUP THE MIDDLE WARE 

 const middlewares = [logger]

 const store = createStore(rootReducer, applyMiddleware(...middlewares))

 export default store





 