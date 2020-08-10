import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Home from '../../../src/pages/Home';
import {render} from '@testing-library/react-native';
import MockedNavigator from '../../../src/navigator/mockedNavigator';

test('should render HomePage with no transactions message', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest
      .fn()
      .mockImplementation((selector) => selector.transactions.transactions),
  }));
  const initialState = {
    transactions: {
      transactions: [],
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const {toJSON} = render(
    <Provider store={store}>
      <MockedNavigator component={Home} />
    </Provider>,
  );
  expect(toJSON()).toMatchSnapshot();
});

test('should render HomePage with transactions', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest
      .fn()
      .mockImplementation((selector) => selector.transactions.transactions),
  }));
  const initialState = {
    transactions: {
      transactions: [{value: 12.5, desc: 'testing desc', date: '09/08/2020'}],
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const {toJSON} = render(
    <Provider store={store}>
      <MockedNavigator component={Home} />
    </Provider>,
  );
  expect(toJSON()).toMatchSnapshot();
});
