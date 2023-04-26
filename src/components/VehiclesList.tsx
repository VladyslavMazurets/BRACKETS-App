import React from 'react';

import { useGetVehiclesDataQuery } from '../store/api/swapi';

interface IItem {
  item: string;
}

function VehiclesList({ item }: IItem) {
  const { data: vehicles, isError } = useGetVehiclesDataQuery(
    `/vehicles/${item}/`
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          // eslint-disable-next-line max-len
          src={`https://starwars-visualguide.com/assets/img/vehicles/${item}.jpg`}
          alt="Films_Img"
          className="w-[150px] h-[150px] rounded-full"
        />
        <p>{vehicles?.name}</p>
      </div>
    </>
  );
}

export default VehiclesList;
