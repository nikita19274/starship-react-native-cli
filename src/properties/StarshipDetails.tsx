import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import styles from './style';
import {RootState} from '../redux/store/store';
import {addFavorite, removeFavorite} from '../redux/slice/favoriteSlice';
import {useDispatch, UseDispatch, useSelector} from 'react-redux';

type StarshipDetailsRouteProp = RouteProp<
  RootStackParamList,
  'StarshipDetails'
>;

const StarshipDetails = () => {
  const route = useRoute<StarshipDetailsRouteProp>();
  const {id, starship} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some(item => item.url === starship.url);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(starship.url));
    } else {
      dispatch(addFavorite(starship));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.idText}>ID: {id}</Text>
        <Text style={styles.title}>{starship.name}</Text>
        <Text style={styles.subtitle}>Model: {starship.model}</Text>
        <Text style={styles.consumables}>
          Consumables: {starship.consumables}
        </Text>
        <Text style={styles.manufacturer}>
          manufacturer: {starship.manufacturer}
        </Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}>
          <Text>
            {isFavorite ? 'Remove from the favorite' : 'Add to the favorite'}
          </Text>
          <Image
            source={require('../../assets/icons/heart.png')}
            style={styles.heartIcon}
            tintColor={isFavorite ? 'red' : '0061ff'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.bottomButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StarshipDetails;
