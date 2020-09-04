 //UTILITY FUNCTIONS ALLOW US TO KEEP OUR FILES CLEAN AND ORGANIZE FUNCTIONS THAT WE MAY NEED IN MULTIPLE FILES IN ONE LOCATION 
 
 //BYPASS THE FUNCTIONALITY OF A HASHMAP HERE

 
 export const addItemToCart = (cartItems, cartItemToAdd) =>{
     // maybe implementing the map functionality at this point 
     const existingCartItem = cartItems.find((cartItem)=> cartItem.id===cartItemToAdd.id);


     if(existingCartItem){

        return cartItems.map(cartItem => {

            if(cartItem.id===cartItemToAdd.id){
                return {
                    ...cartItem, quantity: cartItem.quantity+1
                }
            }
            else return cartItem

            
        } )
     }
     // return a new array with an additional object 

     else {
         return [...cartItems, {...cartItemToAdd, quantity:1 }]
     }
 }