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
    endpoint == 'films' &&
      isSuccess &&
      data.results &&
      data.results.map((item: IFilms) =>
        item.characters?.map((char) => console.log(char))
      );
  }, [endpoint, searchVal, isSuccess, data]);

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
              'hello'
            )}
          </div>
        )}
      </div>
      {console.log('SEARCH VAL:', searchVal)}
    </>
  );
}

export default Search;
