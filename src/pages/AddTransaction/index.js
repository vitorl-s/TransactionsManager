import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
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
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(moment(currentDate, 'DD-MM-YYYY').format('DD/MM/YYYY'));
  };

  const handleButtonPress = () => {
    if (date && desc && value) {
      const formatedValue = parseFloat(value);
      const transaction = {
        date,
        value: formatedValue,
        desc,
      };
      dispatch(SaveTransaction(transaction));
      navigation.navigate('Home');
    } else {
      Alert.alert('Preencha todos os campos para criar sua transação');
    }
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
        <TouchableOpacity>
          <DatePicker
            date={date}
            style={styles.datepicker}
            mode="date"
            androidMode="spinner"
            showIcon={false}
            format="DD/MM/YYYY"
            maxDate="31/12/2020"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateInput: styles.dateInput,
              dateText: styles.dateText,
            }}
            onDateChange={onChange}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Adicionar Transação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransaction;
