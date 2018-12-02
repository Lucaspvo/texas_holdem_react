import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (

      <div className="home-section">

        <h1>Wanna play the game?</h1>
        <button onClick={this.props.redirectToGamePage.bind(this)}>Click here</button>

      </div>

    );

  }

}

export default Home;
