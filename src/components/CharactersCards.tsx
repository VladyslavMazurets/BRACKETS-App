import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { useGetApiDataQuery } from '../store/api/swapi';
import { Result } from '../models/models';

function CharactersCards() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { data } = useGetApiDataQuery(`people/?page=${id}`);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-10">
        {data?.results.map((item: Result) => (
          <Link
            to="/"
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
