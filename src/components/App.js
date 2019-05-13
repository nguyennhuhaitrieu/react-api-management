import React, { Component } from 'react';
import Menu from './Menu/Menu';
import routes from '../routes';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              { this.showRoute(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showRoute(routes){
    let xhtml = null;
    if(routes.length > 0 ){
      xhtml = routes.map((route, index)=> {
        return (
            <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
        );
      });
    }

    return <Switch>{xhtml}</Switch>;
  }
}

export default App;
