import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  useGetStarshipsQuery,
  useSearchStarshipsQuery,
} from '../../services/StarshipApi';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Search from '../../components/Search/search';

type Starship = {
  name: string;
  url: string;
  model: string;
};

type NavigationType = NativeStackNavigationProp<RootStackParamList>;

const Home = () => {
  // const {data, isLoading, isError} = useGetStarshipsQuery();
  const navigation = useNavigation<NavigationType>();
  const [search, setSearch] = useState('');
  const {data, isLoading, isError} = useSearchStarshipsQuery(search);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="blue"
        style={style.loadingIndicator}
      />
    );
  }
  if (isError)
    return (
      <View style={style.error}>
        <Text style={{fontSize: 18}}>Error fetching...</Text>
      </View>
    );

  const getIdFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  const renderItem: ListRenderItem<Starship> = ({item}) => {
    const id = getIdFromUrl(item.url);
    return (
      <TouchableOpacity
        style={style.card}
        onPress={() => {
          navigation.navigate('StarshipDetails', {
            id,
            starship: item,
          });
        }}>
        <Text style={style.name}>{item.name}</Text>
        <Text>{item.model}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={style.title}>Starships 🚀</Text>
      <Search onSearch={setSearch} />
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
