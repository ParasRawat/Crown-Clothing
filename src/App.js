import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from '././pages/sign-in-and-sing-up/sign-in-and-sign-up.component'
import ShopPage from '././pages/shop/shop.component'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route exact path="/shop" component={ShopPage}/>
    <Route exact path="/signin" component={SignInAndSignUp}/>
    </Switch>
    </div>
  );
}

export default App;
