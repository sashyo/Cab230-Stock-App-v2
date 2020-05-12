import React, { useState } from 'react';
import '../styles/App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import HomePage from './HomePage.js';
import FetchAllStocks from './FetchAllStocks.js';
import NavBar from './Navbar.js';
import LoginForm from './LoginForm.js';
import registerForm from './Register.js';






function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <NavBar isAuth={loggedIn} />

          <Switch>

            <Route path="/all-stocks" component={FetchAllStocks} />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={registerForm}/>
            <Route path="/all-stocks" component={FetchAllStocks}/>
          </Switch>
        </header>









      </div>
    </Router>

  );
}

export default App;
