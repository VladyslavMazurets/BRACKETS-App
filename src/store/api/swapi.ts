import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Root } from '../../models/models';

export const swapi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.py4e.com/api/',
  }),
  endpoints: (build) => ({
    getApiData: build.query<Root, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
  }),
});

export const { useGetApiDataQuery } = swapi;
