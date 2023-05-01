import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import { IFilms, IPlanet, ISpecies, IStarships } from '../models/models';

const useFilter = (endpoint: string, searchVal: string) => {
  const [characterIds, setCharacterIds] = useState<string[]>([]);

  const { data, isSuccess } = useGetSearchDataQuery(
    `${endpoint}/?search=${searchVal.length !== 0 ? searchVal : undefined}`
  );

  const filterCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      characterIds.includes(char.url.split('/')[5])
    )
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
      setCharacterIds(newArr);
    } else if (endpoint == 'planets' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IPlanet) =>
        item.residents?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setCharacterIds(newArr);
    } else if (endpoint == 'species' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: ISpecies) =>
        item.people?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setCharacterIds(newArr);
    } else if (endpoint == 'starships' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IStarships) =>
        item.pilots?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setCharacterIds(newArr);
    } else if (endpoint == 'vehicles' && isSuccess && data.results) {
      const newArr: string[] = [];
      data.results.map((item: IStarships) =>
        item.pilots?.map((res) => {
          if (!newArr.includes(res.split('/')[5])) {
            newArr.push(res.split('/')[5]);
          }
        })
      );
      setCharacterIds(newArr);
    }
  }, [endpoint, searchVal, isSuccess, data]);

  return filterCharacters;
};

export default useFilter;
