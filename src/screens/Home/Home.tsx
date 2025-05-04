import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useGetStarshipsPaginationQuery,
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
  const navigation = useNavigation<NavigationType>();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const {
    data: searchData,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = useSearchStarshipsQuery(search, {
    skip: !search,
  });

  const {
    data: starshipsData,
    isLoading: isLoadingStarships,
    isError: isErrorStarships,
  } = useGetStarshipsPaginationQuery(search ? undefined : page);

  const dataToRender = search ? searchData?.results : starshipsData?.results;
  const isLoading = search ? isLoadingSearch : isLoadingStarships;
  const isError = search ? isErrorSearch : isErrorStarships;

  const loadMore = () => {
    if (!search && starshipsData?.next) {
      setPage(prev => prev + 1);
    }
  };

  const goBackToFirstPage = () => {
    setPage(1);
  };

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

  const renderFooter = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          color="blue"
          style={style.loadingIndicator}
        />
      );
    }
    if (starshipsData?.next && !search) {
      return (
        <View style={style.paginationContainer}>
          <TouchableOpacity style={style.loadMoreButton} onPress={loadMore}>
            <Text style={style.loadMoreButtonText}>Load More</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (!starshipsData?.next && !search) {
      return (
        <View style={style.paginationContainer}>
          <TouchableOpacity
            style={style.goBackToFirstPage}
            onPress={goBackToFirstPage}>
            <Text style={style.goBackToFirstPageText}>
              Go To The First Page
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={style.title}>Starships 🚀</Text>
      <Search onSearch={setSearch} />
      <FlatList
        data={dataToRender}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={search ? undefined : loadMore}
        onEndReachedThreshold={2}
        ListFooterComponent={!search ? renderFooter : null}
      />
    </SafeAreaView>
  );
};

export default Home;
