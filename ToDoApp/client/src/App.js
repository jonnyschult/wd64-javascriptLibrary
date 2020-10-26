import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route
} from 'react-router-dom';
import Reactstrap from 'reactstrap';
import './App.css';

import NavbarComponent from './components/Navbar';
import LoginComponent from './components/Login';
import RegisterComponent from './components/register';
import ListsComponent from './components/Lists';

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState('');

/*
  USEEFFECT NOTES:
  1) If you make a useEffect without the array, it will fire each time the app is rendered to the screen. ????????????????????
  2) If you have an empty array in the useEffect, it will fire only when the component is first MOUNTED to the screen.
  3) If you include a dependency in the array, it will fire when that **dependency is updated**. 
*/

//If the user had already logged in, get the previous token: 
  useEffect(() => {
    if(window.localStorage.getItem("authToken")){
      changeAuthJWT(window.localStorage.getItem('authToken')); 
    }
  }, []) //no [] could cause an infinite loop. 

  const authenticateUser = (token) => {
    //purposes: Save the JWT locally and in the Browser.
    window.localStorage.setItem("authToken", token) //very similar to a cookie. 
    // Challenge: Use the "Sate Change" function to set the new token in the state;
    changeAuthJWT(token);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent isLoggedIn={authenticationJWT}/>
        <Switch>
          <Route exact path="/login">
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/register">
            <RegisterComponent authenticateUser={authenticateUser}/>
          </Route>
          <Route exact path="/mylists">
            <ListsComponent token={authenticationJWT} /> 
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
