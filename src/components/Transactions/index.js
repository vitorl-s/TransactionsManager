import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import styles from './styles';

const Transactions = () => {
  const transactionList = useSelector((item) => item.transactions.transactions);
  const [transactions, setTransactions] = useState(transactionList);

  const sortTransactions = () => {
    let sortedTransactions = transactionList;
    sortedTransactions.map((item) => {
      item.date = moment(item.date, 'DD/MM/YYYY');
    });
    const sortedArray = sortedTransactions.sort((a, b) => b.date.diff(a.date));
    sortedArray.map((item) => {
      item.date = moment(item.date, 'DD-MM-YYYY').format('DD/MM/YYYY');
    });
    setTransactions(sortedArray);
  };

  useEffect(() => {
    if (transactionList.length > 0) {
      sortTransactions();
    }
  }, [transactionList]);

  const renderTransaction = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.valueContainer}>
            <Text
              style={
                item.value > 0 ? styles.positiveValue : styles.negativeValue
              }>
              R$ {item.value.toFixed(2).toString().replace('.', ',')}
            </Text>
            <Text style={styles.date}>{item.date.toString()}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text numberOfLines={4} style={styles.desc}>
              {item.desc}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={transactions}
      extraData={transactionList}
      contentContainerStyle={{paddingBottom: 80, paddingTop: 20}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderTransaction}
    />
  );
};

export default Transactions;
