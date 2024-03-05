import { Tuple, configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './features/profile/profileSlice';
import logger from 'redux-logger';

export const makeStore = () => {
  return configureStore({
    reducer: { profileApp: profileSlice.reducer },
    middleware: () => new Tuple(logger),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
