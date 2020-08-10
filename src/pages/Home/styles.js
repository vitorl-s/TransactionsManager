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
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
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
    color: Colors.Text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default styles;
