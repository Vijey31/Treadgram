import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface AIResponse {
  response: string;
  confidence: number;
  suggestions: string[];
}

interface AISearchRequest {
  query: string;
}

export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    searchAI: builder.mutation<AIResponse, AISearchRequest>({
      query: (searchData) => ({
        url: '/ai/search',
        method: 'POST',
        body: searchData,
      }),
    }),
  }),
});

export const { useSearchAIMutation } = aiApi;