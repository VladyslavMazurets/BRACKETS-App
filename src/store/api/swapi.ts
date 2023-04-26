import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPerson, IPlanet, Root } from '../../models/models';

export const swapi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.py4e.com/api/',
  }),
  endpoints: (build) => ({
    getCharactersData: build.query<Root<IPerson>, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
    getPlanetsData: build.query<Root<IPlanet>, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
  }),
});

export const { useGetCharactersDataQuery, useGetPlanetsDataQuery } = swapi;
