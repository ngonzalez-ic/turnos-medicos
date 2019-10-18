import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home.js'

const App =()=> {
 return<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages/login" component={Login} />
       </Switch>
  </BrowserRouter>
 
}
export default App