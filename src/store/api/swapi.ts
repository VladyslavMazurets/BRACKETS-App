import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFilms, IPerson, IPlanet, ISpecies, Root } from '../../models/models';

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
    getPlanetsData: build.query<IPlanet, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
    getSpeciesData: build.query<ISpecies, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
    getFilmsData: build.query<IFilms, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
  }),
});

export const {
  useGetCharactersDataQuery,
  useGetPlanetsDataQuery,
  useGetSpeciesDataQuery,
  useGetFilmsDataQuery,
} = swapi;
