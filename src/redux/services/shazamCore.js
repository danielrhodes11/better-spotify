import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreAPI = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '8ee73132e7msh14cf94ebbdaa7e1p144c2bjsn698e07798b77');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: (countryCode = 'US') => `/charts/world?country_code=${countryCode}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreAPI;
