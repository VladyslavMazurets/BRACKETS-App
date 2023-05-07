import React from 'react';
import { Link } from 'react-router-dom';

import { IPerson } from '../models/models';

interface IResult {
  results: IPerson[];
}

function CharactersCards({ results }: IResult) {
  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-10 my-4
      xl:justify-between"
      >
        {results?.map((item: IPerson) => (
          <Link
            to={`/character/${item.url?.split('/')[5]}`}
            key={item.url?.split('/')[5]}
            className="flex flex-col items-center text-yellow-400
            bg-zinc-900 pt-8 px-6 rounded-xl hover:bg-zinc-800 hover:text-white
            lg:mr-12 xl:m-0"
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${
                item.url?.split('/')[5]
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
