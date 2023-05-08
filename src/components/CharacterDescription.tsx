import React from 'react';

import {
  useGetPlanetsDataQuery,
  useGetSpeciesDataQuery,
} from '../store/api/swapi';
import { IPerson } from '../models/models';

interface ICharacterDes {
  character: IPerson;
  homeworld: string;
  species: string;
}

const typeStyle = `text-xl text-black font-droid font-bold mb-3 flex 
justify-start md:text-2xl`;
const characStyle = 'text-yellow-400 font-raleway capitalize ml-2';

function CharacterDescription({
  homeworld,
  species,
  character,
}: ICharacterDes) {
  const { data: planet } = useGetPlanetsDataQuery(`planets/${homeworld}/`);
  const { data: speciesData } = useGetSpeciesDataQuery(`species/${species}`);

  return (
    <>
      <div
        className="flex flex-col text-white bg-zinc-100 p-5 rounded-2xl 
      mb-6 2xl:m-0"
      >
        <p
          className="text-2xl text-black text-center font-bold font-droid 
          pb-2 mb-8 border-b-2 border-yellow-500 md:text-3xl"
        >
          Character Characteristic
        </p>
        <div className="px-4">
          <p className={typeStyle}>
            Name: <span className={characStyle}>{character?.name}</span>
          </p>
          <p className={typeStyle}>
            Birth Year:{' '}
            <span className={characStyle}>{character?.birth_year}</span>
          </p>
          <p className={typeStyle}>
            Species: <span className={characStyle}>{speciesData?.name}</span>
          </p>
          <p className={typeStyle}>
            Height: <span className={characStyle}>{character?.height}</span>
          </p>
          <p className={typeStyle}>
            Mass: <span className={characStyle}>{character?.mass}</span>
          </p>
          <p className={typeStyle}>
            Gender: <span className={characStyle}>{character?.gender}</span>
          </p>
          <p className={typeStyle}>
            Hair Color:{' '}
            <span className={characStyle}>{character?.hair_color}</span>
          </p>
          <p className={typeStyle}>
            Eye Color:{' '}
            <span className={characStyle}>{character?.eye_color}</span>
          </p>
          <p className={typeStyle}>
            Skin Color:{' '}
            <span className={characStyle}>{character?.skin_color}</span>
          </p>
          <p className={typeStyle}>
            Homeworld: <span className={characStyle}>{planet?.name}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CharacterDescription;
