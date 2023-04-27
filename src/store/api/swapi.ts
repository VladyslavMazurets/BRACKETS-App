import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IFilms,
  IPerson,
  IPlanet,
  ISpecies,
  IStarships,
  IVehicels,
  Root,
} from '../../models/models';

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
    getVehiclesData: build.query<IVehicels, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
    getStarshipsData: build.query<IStarships, string>({
      query: (url) => {
        return {
          url,
        };
      },
    }),
    getSearchData: build.query<any, string>({
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
  useGetVehiclesDataQuery,
  useGetStarshipsDataQuery,
  useGetSearchDataQuery,
} = swapi;
