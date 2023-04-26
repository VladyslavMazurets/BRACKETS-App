import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
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

function CharacterDescription({
  homeworld,
  species,
  character,
}: ICharacterDes) {
  const { data: planet } = useGetPlanetsDataQuery(`planets/${homeworld}/`);
  const { data: speciesData } = useGetSpeciesDataQuery(`species/${species}`);

  return (
    <>
      <div className="flex flex-col text-white bg-yellow-600 h-full">
        <p>
          Name: <span>{character?.name}</span>
        </p>
        <p>
          Birth Year: <span>{character?.birth_year}</span>
        </p>
        <p>
          Species: <span>{speciesData?.name}</span>
        </p>
        <p>
          Height: <span>{character?.height}</span>
        </p>
        <p>
          Mass: <span>{character?.mass}</span>
        </p>
        <p>
          Gender: <span>{character?.gender}</span>
        </p>
        <p>
          Hair Color: <span>{character?.hair_color}</span>
        </p>
        <p>
          Eye Color: <span>{character?.eye_color}</span>
        </p>
        <p>
          Skin Color: <span>{character?.skin_color}</span>
        </p>
        <p>
          Homeworld: <span>{planet?.name}</span>
        </p>
      </div>
    </>
  );
}

export default CharacterDescription;
