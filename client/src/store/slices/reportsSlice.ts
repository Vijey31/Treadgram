import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Report } from '@shared/schema';

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Report'],
  endpoints: (builder) => ({
    getReports: builder.query<Report[], void>({
      query: () => '/reports',
      providesTags: ['Report'],
    }),
    getReportsByPatient: builder.query<Report[], string>({
      query: (patientId) => `/reports/patient/${patientId}`,
      providesTags: (result, error, patientId) => [{ type: 'Report', id: patientId }],
    }),
    createReport: builder.mutation<Report, Partial<Report>>({
      query: (report) => ({
        url: '/reports',
        method: 'POST',
        body: report,
      }),
      invalidatesTags: ['Report'],
    }),
  }),
});

export const { useGetReportsQuery, useGetReportsByPatientQuery, useCreateReportMutation } = reportsApi;