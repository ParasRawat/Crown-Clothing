/**
 *
 * DEFAULT VALUE FOR INITIAL SETUP 
 * 
 */

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    
    switch(action.type){

        case 'SET_CURRENT_USER':

        /**
         * RETURN A NEW OBJECT AND ALTER THE COMPONENTS
         */
            return {
                ...state,
                currentUser: action.payload
            }

        /**
         * 
         * IF NONE OF THE CASES MATCH HERE, DO NOT ALTER STATE RELATED TO THE USER REDUCER
         * 
         */
        default:
            return state

    }
}

export default userReducer