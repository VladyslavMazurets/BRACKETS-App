import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { useGetCharactersDataQuery } from '../store/api/swapi';
import { IPerson } from '../models/models';
import { charactersSliceAction } from '../store/reducers/charactersSlice';
import { RootDispatch } from '../store/store';

function CharactersCards() {
  const { id } = useParams();

  const dispatch = useDispatch<RootDispatch>();
  const { data, isSuccess } = useGetCharactersDataQuery(`people/?page=${id}`);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(charactersSliceAction.saveCharactersData(data.results));
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-10">
        {data?.results.map((item: IPerson) => (
          <Link
            to={`/character/${item.url.split('/')[5]}`}
            key={item.url.split('/')[5]}
            className="flex flex-col items-center text-yellow-400
            bg-zinc-900 pt-8 px-6 rounded-xl hover:bg-zinc-800 hover:text-white"
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${
                item.url.split('/')[5]
              }.jpg`}
              alt="Character-Avatar"
              className="w-[250px] h-[400px] object-cover hover:scale-105"
            />
            <span
              className="text-2xl font-raleway
              font-bold my-4"
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CharactersCards;
