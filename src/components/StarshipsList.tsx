import React from 'react';

import { useGetStarshipsDataQuery } from '../store/api/swapi';

interface IItem {
  item: string;
}

function StarshipsList({ item }: IItem) {
  const { data: starships } = useGetStarshipsDataQuery(`/starships/${item}`);

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          // eslint-disable-next-line max-len
          src={`https://starwars-visualguide.com/assets/img/starships/${item}.jpg`}
          alt="Films_Img"
          className="w-[150px] h-[150px] rounded-full object-cover"
        />
        <p>{starships?.name}</p>
      </div>
    </>
  );
}

export default StarshipsList;
