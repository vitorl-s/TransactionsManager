import * as reducer from '../../../src/redux/reducers/transaction';
import * as types from '../../../src/redux/constants/index';

describe('transactions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.default(undefined, {})).toEqual({
      transactions: [],
    });
  });

  it('should handle add transaction', () => {
    const transaction = {date: '10/08/2020', value: 12, desc: 'description'};
    expect(
      reducer.default(
        {transactions: []},
        {
          type: types.TRANSACTIONS,
          transaction,
        },
      ),
    ).toEqual({
      transactions: [{date: '10/08/2020', value: 12, desc: 'description'}],
    });
  });
});
