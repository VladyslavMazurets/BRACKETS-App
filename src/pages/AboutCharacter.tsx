import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';

function AboutCharacter() {
  const { id } = useParams<string>();
  const character = useSelector((state: RootType) =>
    state.characters.find((element) => element.url.split('/')[5] === id)
  );

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full flex justify-center items-center"
      >
        <div className="flex justify-between items-center w-[80%]">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              character?.url.split('/')[5]
            }.jpg`}
            alt="Character-Avatar"
          />
          <div className="flex flex-col text-white bg-yellow-600">
            <p>
              Name: <span>{character?.name}</span>
            </p>
            <p>
              Birth Year: <span>{character?.birth_year}</span>
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
              Homeworld: <span>{character?.homeworld}</span>
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div>Related Films</div>
            <div>Related Vehicles</div>
            <div>Related Starships</div>
          </div>
        </div>
      </div>
      {console.log(character)}
    </>
  );
}

export default AboutCharacter;
