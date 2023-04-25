import React from 'react';

import CharactersCards from '../components/CharactersCards';

const Pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Characters() {
  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full flex justify-center"
      >
        <div className="flex flex-col items-center w-[90%]">
          <span className="text-red-800">Pagination</span>
          <CharactersCards />
        </div>
      </div>
    </>
  );
}

export default Characters;
