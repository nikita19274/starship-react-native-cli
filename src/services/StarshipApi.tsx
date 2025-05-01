import React from 'react';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const starshipsApi = createApi({
  reducerPath: 'starshipsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.py4e.com/api/'}),
  endpoints: builder => ({
    getStarships: builder.query<any, void>({
      query: () => 'starships/',
    }),
    searchStarships: builder.query<any, string>({
      query: name => `starships/?search=${name}`,
    }),
  }),
});

export const {useGetStarshipsQuery, useSearchStarshipsQuery} = starshipsApi;
