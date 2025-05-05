import React from 'react';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {StarshipApiResponse} from './types';

export const starshipsApi = createApi({
  reducerPath: 'starshipsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.py4e.com/api/'}),
  endpoints: builder => ({
    getStarshipsPagination: builder.query<StarshipApiResponse, number | void>({
      query: (page = 1) => `starships/?page=${page}`,
    }),
    searchStarships: builder.query<StarshipApiResponse, string>({
      query: name => `starships/?search=${name}`,
    }),
  }),
});

export const {useGetStarshipsPaginationQuery, useSearchStarshipsQuery} =
  starshipsApi;
