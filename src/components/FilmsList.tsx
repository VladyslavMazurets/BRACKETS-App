import React from 'react';

import { useGetFilmsDataQuery } from '../store/api/swapi';

interface IItem {
  item: string;
}

function FilmsList({ item }: IItem) {
  const { data: films } = useGetFilmsDataQuery(`films/${item}/`);

  return (
    <>
      <div className="flex flex-col items-center mr-4 px-2 pb-2 last:mr-0">
        <img
          // eslint-disable-next-line max-len
          src={`https://starwars-visualguide.com/assets/img/films/${item}.jpg`}
          alt="Films_Img"
          className="w-[120px] h-[120px] rounded-full object-cover text-black
          inline-block align-middle	leading-[120px]"
        />
        <p className="text-center text-black text-sm font-droid font-bold">
          {films?.title}
        </p>
      </div>
    </>
  );
}

export default FilmsList;
