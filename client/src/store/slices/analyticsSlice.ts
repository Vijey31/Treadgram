import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Analytics } from '@shared/schema';

export const analyticsApi = createApi({
  reducerPath: 'analyticsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Analytics'],
  endpoints: (builder) => ({
    getAnalytics: builder.query<Analytics[], void>({
      query: () => '/analytics',
      providesTags: ['Analytics'],
    }),
  }),
});

export const { useGetAnalyticsQuery } = analyticsApi;