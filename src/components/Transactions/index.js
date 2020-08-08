import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';

const Transactions = ({transactions}) => {
  const renderTransaction = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.valueContainer}>
            <Text
              style={
                item.value > 0 ? styles.positiveValue : styles.negativeValue
              }>
              R$ {item.value}
            </Text>
            <Text style={styles.date}>{item.date.toString()}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{item.desc + item.desc + item.desc}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={transactions}
      contentContainerStyle={{paddingBottom: 80, paddingTop: 20}}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderTransaction}
    />
  );
};

export default Transactions;
