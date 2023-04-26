import React from 'react';

import { useGetFilmsDataQuery } from '../store/api/swapi';

interface IItem {
  item: string;
}

function FilmsList({ item }: IItem) {
  const { data: films } = useGetFilmsDataQuery(`films/${item}/`);

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          // eslint-disable-next-line max-len
          src={`https://starwars-visualguide.com/assets/img/films/${item}.jpg`}
          alt="Films_Img"
          className="w-[150px] h-[150px] rounded-full"
        />
        <p>{films?.title}</p>
      </div>
    </>
  );
}

export default FilmsList;
