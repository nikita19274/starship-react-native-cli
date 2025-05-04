import React from 'react';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const starshipsApi = createApi({
  reducerPath: 'starshipsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.py4e.com/api/'}),
  endpoints: builder => ({
    getStarshipsPagination: builder.query<any, number | void>({
      query: (page = 1) => `starships/?page=${page}`,
    }),
    searchStarships: builder.query<any, string>({
      query: name => `starships/?search=${name}`,
    }),
  }),
});

export const {useGetStarshipsPaginationQuery, useSearchStarshipsQuery} =
  starshipsApi;
