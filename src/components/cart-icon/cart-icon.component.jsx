import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux' 
import { ToggleCartHidden } from './../../redux/cart/cart.actions'
// Dispatch and state items are received as a prop here 
const CartIcon = ({ToggleCartHidden, itemCount}) => {

    return (
        <div className='cart-icon' onClick={ToggleCartHidden} >
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
        

    
}
/**
 * 
 * @param {Redux functions } param0 
 */

const mapStateToProps = ({ cart : { cartItems } }) => {

   return { 
       itemCount : cartItems.reduce((accumulatorQuantity, cartItem) =>
        (accumulatorQuantity+ cartItem.quantity), 0)
   }
}

const mapDispatchToProps = dispatch => {

    return {
        ToggleCartHidden : ()=> dispatch(ToggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
