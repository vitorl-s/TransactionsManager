import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import AddTransaction from '../pages/AddTransaction';
import {Colors} from '../constants/Colors';

const Stack = createStackNavigator();
const TransactionsManagerApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={() => ({
            headerShown: true,
            headerTitle: 'Adicionar nova transação',
            headerStyle: {backgroundColor: Colors.Background},
            headerTintColor: Colors.Text,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TransactionsManagerApp;
