import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import CharactersCards from '../components/CharactersCards';
import { IFilms, IPerson } from '../models/models';

function Search() {
  const [characterIds, setCharacterIds] = useState<string[]>([]);
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
      setCharacterIds(newArr);
    }
  }, [endpoint, searchVal, isSuccess, data]);

  const filterCharacters = useSelector((store: RootType) =>
    store.characters.filter((char) =>
      characterIds.includes(char.url.split('/')[5])
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
            {endpoint === 'people' ? (
              <CharactersCards results={data.results} />
            ) : (
              <CharactersCards results={filterCharacters} />
            )}
          </div>
        )}
      </div>
      {console.log('SEARCH VAL:', searchVal)}
      {console.log(filterCharacters)}
    </>
  );
}

export default Search;
