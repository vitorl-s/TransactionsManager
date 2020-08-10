import React, {useState, useEffect} from 'react';
import {FAB} from 'react-native-paper';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Transactions from '../../components/Transactions';

const Home = () => {
  const navigation = useNavigation();
  const transactionList = useSelector((item) => item.transactions.transactions);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    calculateBalance();
  }, [transactionList]);

  const calculateBalance = () => {
    let finalBalance = transactionList.reduce((a, b) => a + b.value, 0);
    setBalance(finalBalance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transações</Text>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>
          Saldo: R$ {balance.toFixed(2).toString().replace('.', ',')}
        </Text>
      </View>
      {transactionList.length > 0 ? (
        <View style={styles.listContainer}>
          <Transactions />
        </View>
      ) : (
        <View style={styles.noTransactionsContainer}>
          <Text style={styles.noTransactions}>
            Você ainda não possui transações cadastradas
          </Text>
        </View>
      )}
      <FAB
        style={styles.FAB}
        icon="plus"
        onPress={() => navigation.navigate('AddTransaction')}
      />
    </View>
  );
};

export default Home;
