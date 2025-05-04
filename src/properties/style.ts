import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 4,
  },
  idText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  favoriteButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#E5F0FF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#0061ff',
    marginLeft: 5,
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0061ff',
  },
  bottomButton: {
    backgroundColor: '#0061ff',
    paddingVertical: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
