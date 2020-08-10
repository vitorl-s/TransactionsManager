import * as types from '../../../src/redux/constants/index';
import * as actions from '../../../src/redux/actions/transaction';

describe('actions', () => {
  it('should create an action to add transaction', () => {
    const transaction = {date: '10/08/2020', value: 12, desc: 'description'};
    const expectedAction = {
      type: types.TRANSACTIONS,
      transaction,
    };
    expect(actions.SaveTransaction(transaction)).toEqual(expectedAction);
  });
});
