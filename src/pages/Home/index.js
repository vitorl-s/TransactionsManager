import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import moment from 'moment';

const Home = () => {
  const [transactions, setTransactions] = useState([
    {value: -19, date: '01-08-2020'},
    {value: -16, date: '04-08-2020'},
    {value: 10, date: '10-08-2020'},
    {value: 15, date: '05-08-2020'},
    {value: 14, date: '06-08-2020'},
    {value: 20, date: '31-07-2020'},
    {value: 13, date: '07-08-2020'},
    {value: 17, date: '03-08-2020'},
    {value: 12, date: '08-08-2020'},
    {value: 18, date: '02-08-2020'},
    {value: 11, date: '09-08-2020'},
    {value: 111, date: '09-08-2020'},
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
    console.log([1, 2, 3, 4].reduce((a, b) => a + b));
    let finalBalance = transactions.reduce((a, b) => a + b.value, 0);
    console.log('valor balance', finalBalance);
    setBalance(finalBalance);
  };

  const renderTransaction = ({item}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{marginTop: 10}}>{item.value}</Text>
        <Text style={{marginTop: 10}}>{item.date.toString()}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={{alignSelf: 'center'}}>Lista de transações</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTransaction}
      />
      <Text style={{alignSelf: 'center'}}>Saldo: {balance}</Text>
    </View>
  );
};

export default Home;
