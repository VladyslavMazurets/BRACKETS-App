import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import CharacterDescription from '../components/CharacterDescription';

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
          <CharacterDescription />
          <div className="flex flex-col text-white">
            <div>
              Related Films
              <div>
                <img src="" alt="Films_Img" />
                <p>Films Name</p>
              </div>
            </div>
            <div>Related Vehicles</div>
            <div>Related Starships</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCharacter;
