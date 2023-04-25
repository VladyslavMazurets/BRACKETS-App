import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

import CharactersCards from '../components/CharactersCards';

const arrowStyle = 'text-5xl bg-yellow-400 p-2 rounded-full';

function Characters() {
  const { id } = useParams();

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full flex justify-center"
      >
        <div className="flex flex-col items-center w-[90%]">
          <div className="flex items-center justify-between w-full my-6">
            <Link to={`/pages/${Number(id)! - 1}`}>
              <SlArrowLeft className={arrowStyle} />
            </Link>
            <div className="h-[1px] bg-yellow-400 w-[90%]" />
            <Link to={`/pages/${Number(id)! + 1}`}>
              <SlArrowRight className={arrowStyle} />
            </Link>
          </div>
          <CharactersCards />
        </div>
      </div>
    </>
  );
}

export default Characters;
