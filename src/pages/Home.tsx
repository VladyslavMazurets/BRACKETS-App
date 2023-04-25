/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../assets/imgs/characters.jpg';

function Home() {
  return (
    <div
      className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
    bg-no-repeat bg-cover h-[84vh] w-full flex justify-center items-center"
    >
      <Link
        to="/pages/1"
        className="flex flex-col items-center bg-zinc-900 pt-8 px-6 rounded-xl
        text-yellow-400 hover:bg-zinc-800 hover:text-white"
      >
        <img
          src={Img}
          alt="Characters-Img"
          className="w-[600px] h-[350px] object-cover"
        />
        <span
          className="text-4xl font-raleway font-semibold 
        py-4"
        >
          Star Wars Characters
        </span>
      </Link>
    </div>
  );
}

export default Home;
