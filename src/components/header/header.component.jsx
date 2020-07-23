import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {auth} from './../../firebase/firebase.utils'
import { ReactComponent as Logo} from './../../assets/crown.svg'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
const Header =({currentUser})=>{
    return (
        <div className='header'>
            
            <Link to='/' className='logo-container'> 
             <Logo className='logo'/>
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                    </Link>
             
               
                    {
                        //conditional rendering
                        currentUser? 
                        <div className="option" onClick={()=>{
                            console.log(currentUser);
                            return auth.signOut();
                        }}>
                            SIGN OUT 
                            </div> 
                        : <Link className="option" to='/signin'>SIGN IN</Link>

                    }
               
               <CartIcon/>
            </div>
        </div>
    )
}

/**
 * 
 *  THESE ARE THE FUNCTION THAT PROVIDE GLOBAL ACCESS TO USER STORE USING DESTRUCTURED PROPS     
 */
const mapStateToProps = (state)=>{

    return {

        currentUser: state.user.currentUser
    }

}
export default connect(mapStateToProps)(Header)