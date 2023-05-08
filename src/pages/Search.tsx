import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import CharactersCards from '../components/CharactersCards';
import useFilter from '../customHooks/useFilter';

const noDataStyle = `text-2xl text-yellow-400 text-center font-raleway mx-4
font-bold xl:text-5xl xl:leading-[65px]`;

function Search() {
  const { endpoint } = useParams<string>();
  const searchVal = useSelector((store: RootType) => store.search);
  const { data, isLoading } = useGetSearchDataQuery(
    `${endpoint}/?search=${searchVal.length !== 0 ? searchVal : undefined}`
  );

  const filterCharacters = useFilter(endpoint!, searchVal);

  isLoading && (
    <div
      className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
    bg-no-repeat bg-cover min-h-[82.8vh] h-max w-full flex items-center
    justify-center xl:min-h-[76.1vh]"
    >
      <RingLoader color="text-yellow-400" />
    </div>
  );

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover min-h-[82.8vh] h-max w-full flex items-center
        justify-center 2xl:min-h-[76.1vh]"
      >
        {searchVal.length === 0 ? (
          <p className={noDataStyle}>
            Start your search by entering data in the search field
          </p>
        ) : data.results?.length === 0 ? (
          <div className={noDataStyle}>
            No results found for &ldquo;{searchVal}&ldquo;
            <br /> Please make sure your words are spelled correctly, or use
            different filter.
          </div>
        ) : (
          <div className="flex flex-col items-center w-[90%] py-6">
            {endpoint === 'people' && (
              <CharactersCards results={data.results} />
            )}
            {endpoint !== 'people' && (
              <CharactersCards results={filterCharacters} />
            )}
          </div>
        )}
      </div>
      {console.log(isLoading)}
    </>
  );
}

export default Search;
