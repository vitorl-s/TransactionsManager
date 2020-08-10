import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import MockedNavigator from '../../../src/navigator/mockedNavigator';
import Transactions from '../../../src/components/Transactions';

test('should render Transactions Component', () => {
  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
  jest.mock('react-redux', () => ({
    useSelector: jest
      .fn()
      .mockImplementation((selector) => selector.transactions.transactions),
  }));
  const initialState = {
    transactions: {
      transactions: [
        {value: 40.5, desc: 'testing description', date: '08/08/2020'},
      ],
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const {toJSON} = render(
    <Provider store={store}>
      <MockedNavigator component={Transactions} />
    </Provider>,
  );
  expect(toJSON()).toMatchSnapshot();
});
