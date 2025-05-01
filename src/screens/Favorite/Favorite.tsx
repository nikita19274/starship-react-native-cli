import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import styles from './styles';

const Favorite = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.url}
        contentContainerStyle={favorites.length === 0 && styles.emptyContainer}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.model}>{item.model}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No favorites yet</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Favorite;
