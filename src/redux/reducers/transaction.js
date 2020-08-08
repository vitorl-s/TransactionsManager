import {TRANSACTIONS} from '../constants/index';

const initialState = {
  transactions: [{}],
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS:
      return {
        language: action.transaction,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
