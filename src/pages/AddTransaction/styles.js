import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: Colors.Background,
  },
  inputContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputLabel: {
    color: Colors.Label,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    color: Colors.Text,
    marginLeft: 5,
    padding: 15,
  },
  button: {
    backgroundColor: Colors.ButtonColor,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.Text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  datepicker: {
    width: 115,
  },
  dateInput: {
    borderWidth: 0,
  },
  dateText: {
    color: Colors.Text,
  },
});

export default styles;
