import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'


const HastPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route path="/hats" component={HastPage}/>
    </Switch>
    </div>
  );
}

export default App;
