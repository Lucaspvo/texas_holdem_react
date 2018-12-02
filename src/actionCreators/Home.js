import constants from '../constants/index';

export const actionOnClick = (value) => {

  return {

    type: constants.COUNTER_ON_CLICK,
    payload: value,

  };

}
