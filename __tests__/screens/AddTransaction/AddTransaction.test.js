import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import AddTransaction from '../../../src/pages/AddTransaction/index';
import MockedNavigator from '../../../src/navigator/mockedNavigator';

describe('AddTransactionPage tests', () => {
  test('should render AddTransaction Page', () => {
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
        <MockedNavigator component={AddTransaction} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should fill addTransaction inputs', () => {
    const initialState = {
      transactions: {
        transactions: [
          {value: 40.5, desc: 'testing description', date: '08/08/2020'},
        ],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <MockedNavigator component={AddTransaction} />
      </Provider>,
    );
    const valueInput = getByPlaceholderText('Valor');
    fireEvent.changeText(valueInput, '12');
    const descriptionInput = getByPlaceholderText('Descrição');
    fireEvent.changeText(descriptionInput, 'This is a description test');
    expect(valueInput.props.value).toEqual('12');
    expect(descriptionInput.props.value).toEqual('This is a description test');
  });
});
