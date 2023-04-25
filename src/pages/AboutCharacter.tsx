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
          <img src="" alt="Character-Avatar" />
          <div className="flex flex-col text-white">
            <p>info</p>
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
