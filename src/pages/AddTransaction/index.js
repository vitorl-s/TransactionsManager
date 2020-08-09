import React, {useState} from 'react';
import moment from 'moment';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../constants/Colors';
import {SaveTransaction} from '../../redux/actions/transaction';

const AddTransaction = () => {
  const [value, setValue] = useState();
  const [desc, setDesc] = useState();
  const parsedDate = moment().format('DD/MM/YYYY');
  const [date, setDate] = useState(parsedDate);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(moment(currentDate).format('DD/MM/YYYY'));
  };

  const handleButtonPress = () => {
    const formatedValue = parseFloat(value);
    const transaction = {
      date,
      value: formatedValue,
      desc,
    };
    dispatch(SaveTransaction(transaction));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Valor da transação(R$)</Text>
        <TextInput
          value={value}
          placeholder="Valor"
          placeholderTextColor={Colors.Text}
          style={styles.input}
          keyboardType="decimal-pad"
          underlineColorAndroid={Colors.Text}
          onChangeText={(price) => setValue(price)}
        />
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          value={desc}
          placeholder="Descrição"
          placeholderTextColor={Colors.Text}
          underlineColorAndroid={Colors.Text}
          style={styles.input}
          onChangeText={(description) => setDesc(description)}
        />
        <Text style={styles.inputLabel}>Data</Text>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text style={styles.input}>{date}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            maximumDate={new Date()}
            value={new Date()}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Adicionar Transação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransaction;
