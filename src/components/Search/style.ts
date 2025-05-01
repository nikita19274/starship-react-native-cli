import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  resultCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  resultName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultModel: {
    fontSize: 14,
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
