import React from "react";
import Navbar from "../Navbar";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from '../../../pages/Home'
import Reports from '../../../pages/Reports'
import Products from '../../../pages/Products'


function User() {
  return (
    <div >
      <Router>
              <Navbar />
              <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Reports' component={Reports} />
          <Route path='/Products' component={Products}/>
              </Switch>
      </Router>
    </div>
  );
}

export default User;
