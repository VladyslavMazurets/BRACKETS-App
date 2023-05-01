import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import { useGetSearchDataQuery } from '../store/api/swapi';
import CharactersCards from '../components/CharactersCards';
import useFilter from '../customHooks/useFilter';

const noDataStyle = `text-5xl text-yellow-400 text-center font-raleway 
font-bold leading-[65px]`;

function Search() {
  const { endpoint } = useParams<string>();
  const searchVal = useSelector((store: RootType) => store.search);
  const { data } = useGetSearchDataQuery(
    `${endpoint}/?search=${searchVal.length !== 0 ? searchVal : undefined}`
  );

  const filterCharacters = useFilter(endpoint!, searchVal);

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover min-h-[83.9vh] h-max w-full flex items-center
        justify-center"
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
    </>
  );
}

export default Search;
