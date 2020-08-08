import {TRANSACTIONS} from '../constants/index';

export function SaveTransaction(transaction) {
  return {
    type: TRANSACTIONS,
    transaction,
  };
}
