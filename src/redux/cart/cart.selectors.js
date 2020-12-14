import {createSelector} from 'reselect'

/**
 * Aim is to avoid the reloading of the unrelevant module everytime the root store of the redux changes 
 */

 const selectCart = (state) =>  state.cart; 

 export const selectCartItems  = createSelector(
     [selectCart], (cart) => cart.cartItems
 );

 export const selectCartItemsCount = createSelector(
     [selectCartItems], 
     (cartItems) => cartItems.reduce(
         (accumulatorQuantity, cartItem) => accumulatorQuantity+ cartItem.quantity, 0 
     )
 );