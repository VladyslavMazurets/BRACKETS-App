import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import { useGetPlanetsDataQuery } from '../store/api/swapi';

function CharacterDescription() {
  const [homeworld, setHomeWorld] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const { id } = useParams();

  const character = useSelector((state: RootType) =>
    state.characters.find((element) => element.url.split('/')[5] === id)
  );

  const getAnotherData = () => {
    character?.species.map((item) => setSpecies(item.split('/')[5]));
    setHomeWorld(character?.homeworld.split('/')[5]);
  };

  const { data: planet } = useGetPlanetsDataQuery(`planets/${homeworld}/`);

  useEffect(() => {
    getAnotherData();
  }, []);

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
          Species: <span>{character?.species}</span>
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
        {/* <p>
          Homeworld: <span>{planet?.name}</span>
        </p> */}
      </div>
      {console.log('Hello')}
    </>
  );
}

export default CharacterDescription;
