import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Game from '../containers/Game';

class App extends Component{

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div className="app-body">

        <Navbar
          color="light"
          light
          expand="md"
          { ...this.props }
        />

        <div className="content-section">

          <Switch>
            <Route path="/game" component={Game} />
            <Route exact path="/" component={Home} />
          </Switch>

        </div>

      </div>

    );

  }

}

export default App;
