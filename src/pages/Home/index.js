import React, {useState, useEffect} from 'react';
import {FAB} from 'react-native-paper';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import styles from './styles';
import Transactions from '../../components/Transactions';

const Home = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([
    {value: -19, date: '01-08-2020', desc: 'Lorem Ipsum', id: 1},
    {value: -16, date: '04-08-2020', desc: 'Lorem Ipsum', id: 2},
    {value: 10, date: '10-08-2020', desc: 'Lorem Ipsum', id: 3},
    {value: 13, date: '07-08-2020', desc: 'Lorem Ipsum', id: 7},
    {value: 18, date: '02-08-2020', desc: 'Lorem Ipsum', id: 10},
    {value: 11, date: '09-08-2020', desc: 'Lorem Ipsum', id: 11},
    {value: 11111, date: '09-08-2020', desc: 'Lorem Ipsum', id: 12},
  ]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    sortTransactions();
  }, [transactions]);

  const sortTransactions = () => {
    let sortedTransactions = transactions;
    sortedTransactions.map((item) => {
      item.date = moment(item.date, 'DD-MM-YYYY');
    });
    const sortedArray = sortedTransactions.sort((a, b) => b.date.diff(a.date));
    sortedArray.map((item) => {
      item.date = moment(item.date, 'DD-MM-YYYY').format('DD/MM/YYYY');
    });
    setTransactions(sortedArray);
    calculateBalance();
  };

  const calculateBalance = () => {
    let finalBalance = transactions.reduce((a, b) => a + b.value, 0);
    setBalance(finalBalance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de transações</Text>
      <View style={styles.balance}>
        <Text>Saldo: {balance}</Text>
      </View>
      {transactions.length > 0 ? (
        <View style={{paddingTop: 20, paddingBottom: 20}}>
          <Transactions transactions={transactions} />
        </View>
      ) : (
        <View style={styles.noTransactionsContainer}>
          <Text style={styles.noTransactions}>
            Você ainda não possui transações cadastradas.
          </Text>
        </View>
      )}
      <FAB
        style={styles.FAB}
        icon="plus"
        onPress={() => navigation.navigate('AddTransactions')}
      />
    </View>
  );
};

export default Home;
