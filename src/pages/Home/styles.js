import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Colors.Background,
  },
  balance: {
    justifyContent: 'center',
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    paddingBottom: 15,
    marginTop: 15,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  title: {
    alignSelf: 'center',
    color: Colors.Text,
    fontSize: 22,
    fontWeight: 'bold',
  },
  FAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    backgroundColor: Colors.ButtonColor,
    bottom: 0,
  },
  noTransactionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTransactions: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default styles;
