import React, { Component } from 'react';
import {
  FormGroup,
  Row,
  Col
} from 'reactstrap';

function StartGame() {

  return (
    <div className="start-game-div">

      <h1>Start Game</h1>
      <button>Click here</button>

    </div>
  );

}

function Hand1(props) {

  return (

    <Row>

      <Col md="3">

        <div className="card">

          {`${props.hand1[0].value} of ${props.hand1[0].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand1[1].value} of ${props.hand1[1].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand1[2].value} of ${props.hand1[2].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand1[3].value} of ${props.hand1[3].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand1[4].value} of ${props.hand1[4].suit}`}

        </div>

      </Col>

    </Row>

  );

}

function Hand2(props) {

  return (

    <Row>

      <Col md="3">

        <div className="card">

          {`${props.hand2[0].value} of ${props.hand2[0].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand2[1].value} of ${props.hand2[1].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand2[2].value} of ${props.hand2[2].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand2[3].value} of ${props.hand2[3].suit}`}

        </div>

      </Col>

      <Col md="3">

        <div className="card">

          {`${props.hand2[4].value} of ${props.hand2[4].suit}`}

        </div>

      </Col>

    </Row>

  );

}

function GameTable(props) {

  return (
    <div>

      <FormGroup row>

        <Col className="restart-game-btn-div" md="12">

          <h1>Restart Game?</h1>
          <button>Click here</button>

        </Col>

      </FormGroup>

      <Row>

        <Col md="6">

          <FormGroup row>

            <Col md="12">

              <h2>{props.pokerHand1.hand}</h2>

            </Col>

            <Col md="12">

              <Hand1 { ...props } />

            </Col>

            <Col md="12"></Col>

          </FormGroup>

        </Col>

        <Col md="6">

          <FormGroup row>

            <Col md="12">

              <h2>{props.pokerHand2.hand}</h2>

            </Col>

            <Col md="12">

              <Hand2 { ...props } />

            </Col>

            <Col md="12"></Col>

          </FormGroup>

        </Col>

      </Row>

    </div>
  );

}

class Game extends Component {

  constructor(props) {

    super(props);

    props.startingGame();

  }

  render() {

    return (

      <div className="game-section">

        {this.props.started ? <GameTable { ...this.props } /> : <StartGame />}

      </div>

    );

  }

}

export default Game;
