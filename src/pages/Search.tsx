import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import CharactersCards from '../components/CharactersCards';
import {
  IFilms,
  IPerson,
  IPlanet,
  ISpecies,
  IStarships,
} from '../models/models';

function Search() {
  const [filmCharacterIds, setFilmCharacterIds] = useState<string[]>([]);
  const [planetCharacterIds, setPlanetCharacterIds] = useState<string[]>([]);
  const [speciesCharacterIds, setSpeciesCharacterIds] = useState<string[]>([]);
  const [vehiclesCharacterIds, setVehiclesCharacterIds] = useState<string[]>(
    []
  );
  const [starshipsCharacterIds, setStarshipsCharacterIds] = useState<string[]>(
    []
  );
  const searchVal = useSelector((store: RootType) => store.search);

  const { endpoint } = useParams<string>();

  const { data, isSuccess } = useGetSearchDataQuery(
    `${endpoint}/?search=${searchVal.length !== 0 ? searchVal : undefined}`
  );

  useEffect(() => {
    if (endpoint == 'films' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IFilms) =>
        item.characters?.map((char) => {
          if (!newArr.includes(char.split('/')[5])) {
            newArr.push(char.split('/')[5]);
          }
        })
      );
      setFilmCharacterIds(newArr);
    } else if (endpoint == 'planets' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IPlanet) =>
        item.residents?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setPlanetCharacterIds(newArr);
    } else if (endpoint == 'species' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: ISpecies) =>
        item.people?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setSpeciesCharacterIds(newArr);
    } else if (endpoint == 'starships' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IStarships) =>
        item.pilots?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setStarshipsCharacterIds(newArr);
    } else if (endpoint == 'vehicles' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IStarships) =>
        item.pilots?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setVehiclesCharacterIds(newArr);
    }
  }, [endpoint, searchVal, isSuccess, data]);

  const filterFilmCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      filmCharacterIds.includes(char.url.split('/')[5])
    )
  );
  const filterPlanetCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      planetCharacterIds.includes(char.url.split('/')[5])
    )
  );
  const filterSpeciesCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      speciesCharacterIds.includes(char.url.split('/')[5])
    )
  );
  const filterStarshipsCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      starshipsCharacterIds.includes(char.url.split('/')[5])
    )
  );
  const filterVehiclesCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      vehiclesCharacterIds.includes(char.url.split('/')[5])
    )
  );

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover min-h-[83.9vh] h-max w-full flex items-center
        justify-center"
      >
        {searchVal.length === 0 ? (
          <p
            className="text-5xl text-yellow-400 text-center font-raleway 
          font-bold leading-[65px]"
          >
            Start your search by writing the hero&apos;s name
          </p>
        ) : (
          <div className="flex flex-col items-center w-[90%] py-6">
            {endpoint === 'people' && (
              <CharactersCards results={data.results} />
            )}
            {endpoint == 'films' && (
              <CharactersCards results={filterFilmCharacters} />
            )}
            {endpoint == 'planets' && (
              <CharactersCards results={filterPlanetCharacters} />
            )}
            {endpoint == 'species' && (
              <CharactersCards results={filterSpeciesCharacters} />
            )}
            {endpoint == 'starships' && (
              <CharactersCards results={filterStarshipsCharacters} />
            )}
            {endpoint == 'vehicles' && (
              <CharactersCards results={filterVehiclesCharacters} />
            )}
          </div>
        )}
      </div>
      {console.log(data)}
    </>
  );
}

export default Search;
