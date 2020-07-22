import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from '././pages/sign-in-and-sing-up/sign-in-and-sign-up.component'
import ShopPage from '././pages/shop/shop.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {

  

  unsubscribeFromAuth = null;


  componentDidMount(){

    const {updateCurrentUser, currentUser} = this.props;

    console.log(currentUser);

   this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth =>{

    if(userAuth){

        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot =>{
          
          updateCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        

       console.log(this.state);
    }

    else{

      updateCurrentUser(userAuth)
    }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
   

  render(){
    return (
      <div>
  
    <Header />


    <Switch>
    <Route exact path="/" component={Homepage}/>

    <Route exact path="/shop" component={ShopPage}/>


    <Route exact path="/signin" render={() => {
      console.log(this.props.currentUser)
      return this.props.currentUser==null ? <SignInAndSignUp/> : <Redirect to ='/' /> 
    }}/>

    </Switch>
    </div>
  )
  }
}

/**
 * DESTRUCTURE OF THE USER REDUCER 
 */
const mapStateToProps = ({user})=>{

  return {

    currentUser :  user.currentUser
  }
} 

const mapDispatchToProps = (dispatch) => {

  return {

    /**
     * BASICALLY WE ARE SIMPLY DISPATCHING AN OBJECT ... AS AN ACTION THAT IS TO BE RECEIVED BY EACH OF THE REDUCERS 
     */
    updateCurrentUser : user => dispatch(setCurrentUser(user))

  }

}
 export default connect(mapStateToProps, mapDispatchToProps )(App);


 /**
  * CREATED A GLOBAL DISPATCH EVENT WITH PAYLOAD AS USER 
  */