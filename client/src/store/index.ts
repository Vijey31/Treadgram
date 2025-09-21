import { configureStore } from '@reduxjs/toolkit';
import { patientsApi } from './slices/patientsSlice';
import { reportsApi } from './slices/reportsSlice';
import { imagingApi } from './slices/imagingSlice';
import { analyticsApi } from './slices/analyticsSlice';
import { aiApi } from './slices/aiSlice';

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
    [imagingApi.reducerPath]: imagingApi.reducer,
    [analyticsApi.reducerPath]: analyticsApi.reducer,
    [aiApi.reducerPath]: aiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      patientsApi.middleware,
      reportsApi.middleware,
      imagingApi.middleware,
      analyticsApi.middleware,
      aiApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;