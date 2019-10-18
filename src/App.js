import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home.js'
import Dashboard from './pages/dashboard'

const App =()=> {
 return<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages/login" component={Login} />
        <Route exact path="/pages/dashboard" component={Dashboard} />
       </Switch>
  </BrowserRouter>
 
}
export default App