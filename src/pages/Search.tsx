import React from 'react';
import { useSelector } from 'react-redux';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import CharactersCards from '../components/CharactersCards';

function Search() {
  const searchVal = useSelector((store: RootType) => store.search);

  const { data } = useGetSearchDataQuery(
    `people/?search=${searchVal.length !== 0 ? searchVal : undefined}`
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
            The search field is empty.
            <br /> Start your search by writing the hero&apos;s name
          </p>
        ) : (
          <div className="flex flex-col items-center w-[90%] py-6">
            {data && <CharactersCards results={data.results} />}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
