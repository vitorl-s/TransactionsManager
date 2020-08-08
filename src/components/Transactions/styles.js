import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    width: '85%',
    height: 85,
    alignSelf: 'center',
    padding: 5,
    paddingBottom: 15,
    marginTop: 15,
    borderRadius: 25,
    backgroundColor: Colors.SecondaryColor,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  valueContainer: {
    flex: 0.6,
    marginRight: 10,
  },
  positiveValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PositiveTransaction,
  },
  negativeValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.NegativeTransaction,
  },
  date: {
    color: Colors.Label,
    fontSize: 12,
  },
  descContainer: {
    flex: 1,
  },
  desc: {
    marginTop: 10,
    color: Colors.Text,
  },
});

export default styles;
