import {View, Text, TextInput, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect, useState, SetStateAction, Dispatch} from 'react';
import {useSearchStarshipsQuery} from '../../services/StarshipApi';
import styles from './style';

interface Props {
  onSearch: Dispatch<SetStateAction<string>>;
}

const Search = ({onSearch}: Props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(search);
    }, 1000);
    return () => clearTimeout(delay);
  }, [search, onSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for starship корабль..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
    </View>
  );
};

export default Search;
