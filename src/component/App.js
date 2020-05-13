import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>   
    );
  }
}

export default App;
