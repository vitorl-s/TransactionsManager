import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import TransactionsManagerApp from './src/navigator/appNavigator';
import {store, persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TransactionsManagerApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
