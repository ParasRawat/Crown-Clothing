import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux' 
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
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
 * This part was re-rendering because of the state change, even though this area is actually not being changed 
 */

 
 /**
  * Converting it to a memorized selector 
  */
const mapStateToProps = (state) => {

   return { 
       itemCount : selectCartItemsCount(state)
   }
}

const mapDispatchToProps = dispatch => {

    return {
        ToggleCartHidden : ()=> dispatch(ToggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
