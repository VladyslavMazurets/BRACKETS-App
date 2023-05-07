/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../assets/imgs/characters.jpg';

function Home() {
  return (
    <div
      className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
    bg-no-repeat bg-cover h-[84.2vh] w-full flex justify-center items-center
    min-[360px]:h-[87.8vh] md:h-[89vh] xl:h-[84vh]"
    >
      <Link
        to="/pages/1"
        className="flex flex-col items-center bg-zinc-900 pt-8 px-6 rounded-xl
        text-yellow-400 hover:bg-zinc-800 hover:text-white"
      >
        <img
          src={Img}
          alt="Characters-Img"
          className="w-[230px] h-[200px] object-cover min-[360px]:w-[300px]
          min-[360px]:h-[250px] md:w-[600px] md:h-[350px]"
        />
        <span
          className="text-xl font-raleway font-semibold 
        py-4 md:text-4xl"
        >
          Star Wars Characters
        </span>
      </Link>
    </div>
  );
}

export default Home;
