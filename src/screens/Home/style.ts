import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ccc',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 12,
  },
  paginationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loadMoreButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  loadMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  goBackToFirstPage: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  goBackToFirstPageText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
