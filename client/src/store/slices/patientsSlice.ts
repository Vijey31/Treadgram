import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Patient } from '@shared/schema';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Patient'],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => '/patients',
      providesTags: ['Patient'],
    }),
    getPatient: builder.query<Patient, string>({
      query: (id) => `/patients/${id}`,
      providesTags: (result, error, id) => [{ type: 'Patient', id }],
    }),
    createPatient: builder.mutation<Patient, Partial<Patient>>({
      query: (patient) => ({
        url: '/patients',
        method: 'POST',
        body: patient,
      }),
      invalidatesTags: ['Patient'],
    }),
  }),
});

export const { useGetPatientsQuery, useGetPatientQuery, useCreatePatientMutation } = patientsApi;