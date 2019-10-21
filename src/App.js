import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ListDetails from './components/lists/ListDetails';
import Categories from './components/categories/Categories';
import Notifications from './components/notification/Notifications';
import Login from './components/login/Login';
import Help from './components/help/Help';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (

      <div>
        
        <BrowserRouter>
        <div className="App">
        <Header/>
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/list/:id' component={ListDetails} />
            <Route path='/Categories' component={Categories} />
            <Route path='/Notifications' component={Notifications} />
            <Route path='/Login' component={Login} />
            <Route path='/Help' component={Help} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
