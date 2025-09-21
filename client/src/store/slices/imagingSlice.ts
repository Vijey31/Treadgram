import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Imaging } from '@shared/schema';

export const imagingApi = createApi({
  reducerPath: 'imagingApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Imaging'],
  endpoints: (builder) => ({
    getImaging: builder.query<Imaging[], void>({
      query: () => '/imaging',
      providesTags: ['Imaging'],
    }),
    getImagingByPatient: builder.query<Imaging[], string>({
      query: (patientId) => `/imaging/patient/${patientId}`,
      providesTags: (result, error, patientId) => [{ type: 'Imaging', id: patientId }],
    }),
    createImaging: builder.mutation<Imaging, Partial<Imaging>>({
      query: (imaging) => ({
        url: '/imaging',
        method: 'POST',
        body: imaging,
      }),
      invalidatesTags: ['Imaging'],
    }),
  }),
});

export const { useGetImagingQuery, useGetImagingByPatientQuery, useCreateImagingMutation } = imagingApi;