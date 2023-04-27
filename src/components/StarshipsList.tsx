import React from 'react';

import { useGetStarshipsDataQuery } from '../store/api/swapi';

interface IItem {
  item: string;
}

function StarshipsList({ item }: IItem) {
  const { data: starships } = useGetStarshipsDataQuery(`/starships/${item}`);

  return (
    <>
      <div className="flex flex-col items-center mr-4 px-2 pb-2 last:mr-0">
        <img
          // eslint-disable-next-line max-len
          src={`https://starwars-visualguide.com/assets/img/starships/${item}.jpg`}
          alt="Starship_Img"
          className="w-[120px] h-[120px] rounded-full object-cover text-black
          inline-block align-middle	leading-[120px]"
        />
        <p className="text-center text-black text-sm font-droid font-bold">
          {starships?.name}
        </p>
      </div>
    </>
  );
}

export default StarshipsList;
