import deepmerge from 'deepmerge';
import constants from '../constants/index';

function generateDeckRandomIndex(array) {

  let number = Math.floor(Math.random() * 52);

  while (array.includes(number)) {

    number = Math.floor(Math.random() * 52);

  }

  return number;

}

function royalFlush(hand) {

  const royalHand = [8,9,10,11,12];
  const suit = hand[0].suit;

  for (let i = 0; i < hand.length; i++) {

    if (hand[i].index !== royalHand[i] || hand[i].suit !== suit) {

      return false;

    }

  }

  return true;

}

function straightFlush(hand) {

  const suit = hand[0].suit;

  for (let i = 1; i < hand.length; i++) {

    if (hand[i-1].index + 1 !== hand[i].index || hand[i].suit !== suit) {

      return false;

    }

  }

  return true;

}

function fourOfAKind(hand) {

  let max = 0;
  let index;

  if (hand[0].index === hand[1].index) {

    index = hand[0].index;

  } else {

    index = hand[1].index;

  }

  for (let i = 0; i < hand.length; i++) {

    if (hand[i].index === index) max++;

  }

  return max === 4 ? true : false;

}

function fullHouse(hand) {

  let indexes;

  if (hand[0].index !== hand[1].index) {

    indexes = [
      {
        index: hand[0].index,
        max: 0,
      },
      {
        index: hand[1].index,
        max: 0,
      }
    ];

  } else if (hand[0].index !== hand[2].index) {

    indexes = [
      {
        index: hand[0].index,
        max: 0,
      },
      {
        index: hand[2].index,
        max: 0,
      }
    ];

  } else if (hand[0].index !== hand[3].index) {

    indexes = [
      {
        index: hand[0].index,
        max: 0,
      },
      {
        index: hand[3].index,
        max: 0,
      }
    ];

  }

  for (let i = 0; i < hand.length; i++) {

    if (hand[i].index === indexes[0].index) {

      indexes[0].max++;

    } else if (hand[i].index === indexes[1].index) {

      indexes[1].max++;

    }

  }

  if ([3,2].includes(indexes[0].max) && [3,2].includes(indexes[1].max)) {

    return true;

  }

  return false;

}

function flush(hand) {

  const suit = hand[0].suit;

  for (let i = 0; i < hand.length; i++) {

    if (hand[i].suit !== suit) {

      return false;

    }

  }

  return true;

}

function straight(hand) {

  for (let i = 1; i < hand.length; i++) {

    if (hand[i-1].index + 1 !== hand[i].index) {

      return false;

    }

  }

  return true;

}

function threeOfAKind(hand) {

  let max = 0;
  let tmpMax = 0;

  for (let i = 0; i < hand.length; i++) {

    for (let j = 0; j < hand.length; j++) {

      if (hand[i].index === hand[j].index) {

        tmpMax++;

      }

    }

    max = tmpMax > max ? tmpMax : max;
    tmpMax = 0;

  }

  return max === 3 ? true : false;

}

function twoPair(hand) {

  let arrayMax = [];
  let tmpMax = 0;

  for (let i = 0; i < hand.length; i++) {

    for (let j = 0; j < hand.length; j++) {

      if (hand[i].index === hand[j].index) {

        tmpMax++;

      }

    }

    arrayMax.push(tmpMax);
    tmpMax = 0;

  }

  let max = arrayMax.reduce((total, elem) => {

    if (elem === 2) {

      return total + 1;

    }

    return total;

  }, 0);

  console.log(arrayMax);
  console.log(max);

  return max === 2 ? true : false;

}

function pair(hand) {

  let arrayMax = [];
  let tmpMax = 0;

  for (let i = 0; i < hand.length; i++) {

    for (let j = 0; j < hand.length; j++) {

      if (hand[i].index === hand[j].index) {

        tmpMax++;

      }

    }

    arrayMax.push(tmpMax);
    tmpMax = 0;

  }

  return arrayMax.find((elem) => elem === 2) ? true : false;

}

function pokerHand(array) {

  if (royalFlush(array)) return {
    hand: 'Royal Flush',
    points: 10,
  };

  if (straightFlush(array)) return {
    hand: 'Straight Flush',
    points: 9,
  };

  if (fourOfAKind(array)) return {
    hand: 'Four of a kind',
    points: 8,
  };

  if (fullHouse(array)) return {
    hand: 'Full House',
    points: 7,
  };

  if (flush(array)) return {
    hand: 'Flush',
    points: 6,
  };

  if (straight(array)) return {
    hand: 'Straight',
    points: 5,
  };

  if (threeOfAKind(array)) return {
    hand: 'Three of a kind',
    points: 4,
  };

  if (twoPair(array)) return {
    hand: 'Two Pair',
    points: 3,
  };

  if (pair(array)) return {
    hand: 'Pair',
    points: 2,
  };

  return {
    hand: 'High Card',
    points: 1,
    index: array[4].index,
  };

}

function merge(array1, array2) {

  let i = 0;
  let j = 0;
  let newArray = [];

  while (i < array1.length && j < array2.length) {

    if (array1[i].index < array2[j].index) {

      newArray.push(array1[i]);
      ++i;

    } else if (array1[i].index > array2[j].index) {

      newArray.push(array2[j]);
      ++j;

    } else if (array1[i].index === array2[j].index) {

      newArray.push(array1[i]);
      ++i;
      newArray.push(array2[j]);
      ++j;

    }

  }

  if (i < array1.length) {

    while (i < array1.length) {

      newArray.push(array1[i]);
      ++i;

    }

  }

  if (j < array2.length) {

    while (j < array2.length) {

      newArray.push(array2[j]);
      ++j;

    }

  }

  return newArray;

}

function mergeSort(array, l, r) {

  if (l < r) {

    let m = l + Math.floor((r - l) / 2);

    let array1 = mergeSort(array, l, m);
    let array2 = mergeSort(array, m + 1, r);
    return merge(array1, array2);

  }

  return [array[l]];

}

export default (state = {}, action) => {

  switch (action.type) {

    case constants.START_GAME: {

      let randomNumbers;

      const newState = deepmerge({}, state);

      randomNumbers = (new Array(5)).fill(1).reduce((array, elem, index) => {

        let i = generateDeckRandomIndex(array);

        array.push(i);

        return array;

      }, []);

      newState.hand1 = randomNumbers.map((elem) => newState.deck[elem]);
      newState.hand1 = mergeSort(newState.hand1, 0, newState.hand1.length - 1);
      newState.pokerHand1 = pokerHand(newState.hand1);

      randomNumbers = (new Array(5)).fill(1).reduce((array, elem, index) => {

        let i = generateDeckRandomIndex(array);

        array.push(i);

        return array;

      }, randomNumbers);

      newState.hand2 = randomNumbers.map((elem) => newState.deck[elem]).filter((elem, index) => index > 4);
      newState.hand2 = mergeSort(newState.hand2, 0, newState.hand2.length - 1);
      newState.pokerHand2 = pokerHand(newState.hand2);

      newState.started = true;

      return newState;

    }

    default:
      return state;

  }

};
