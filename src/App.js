import React from 'react';
import {BrowserRouter, Route, } from 'react-router-dom';



import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import UnAuthorized from './components/UnAuthorized';


const App = () => {
  return (
    
      <div className="Welcome">
                <img src="images/WelcomeBack.png" alt="Logo of Welcomeback"/>
                <div className="rightcontainer">
           
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Register" component={Register}/>
      <Route path="/Login" component={Login}/>
      <Route path="/DashBoard" component={DashBoard}/> 
      <Route path="/UnAuthorized" component={UnAuthorized}/>      
    </BrowserRouter>
    </div>
                <div className="clear"></div>
            </div>
  );
}

export default App;
