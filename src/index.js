import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import appReducer from './reducers/App';
import homeReducer from './reducers/Home';
import gameReducer from './reducers/Game';
import App from './containers/App';
import './scss/index.scss';

const suits = ['clubs','diamonds','hearts','spades'];

function createDeck() {

  return (new Array(52)).fill(1).map((elem, index) => {

    if (index % 13 === 9) {

      return {
        suit: suits[Math.floor(index/13)],
        value: 'J',
        index: index % 13,
      };

    } else if (index % 13 === 10) {

      return {
        suit: suits[Math.floor(index/13)],
        value: 'Q',
        index: index % 13,
      };

    } else if (index % 13 === 11) {

      return {
        suit: suits[Math.floor(index/13)],
        value: 'K',
        index: index % 13,
      };

    } else if (index % 13 === 12) {

      return {
        suit: suits[Math.floor(index/13)],
        value: 'A',
        index: index % 13,
      };

    } else {

      return {
        suit: suits[Math.floor(index/13)],
        value: ((index + 2) % 13).toString(),
        index: index % 13,
      };

    }

  });

}

const store = createStore(
  combineReducers({
    app: appReducer,
    home: homeReducer,
    game: gameReducer,
  }),
  {
    app: {
      navbar: {
        collapse: {
          isOpen: false,
        },
      },
    },
    home: {
    },
    game: {
      deck: createDeck(),
      started: false,
      hand1: [],
      hand2: [],
      pokerHand1: null,
      pokerHand2: null,
    },
  }
);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
