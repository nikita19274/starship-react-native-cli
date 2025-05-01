import {configureStore} from '@reduxjs/toolkit';
import {starshipsApi} from '../../services/StarshipApi';
import favoriteSlice from '../slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice,
    [starshipsApi.reducerPath]: starshipsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(starshipsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
