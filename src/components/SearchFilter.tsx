import React from 'react';
import { NavLink } from 'react-router-dom';

import { filterData } from '../assets/constData/filterData';

const btnStyle = `capitalize bg-yellow-500 px-6 py-1 mr-4 rounded-full
border-2 border-transparent last:m-0`;
const activStyle = `capitalize px-6 py-1 mr-4 rounded-full bg-inherit
text-yellow-400 border-2 border-yellow-400 last:m-0`;

function SearchFilter() {
  return (
    <>
      <div className="flex justify-center bg-black">
        <div
          className="flex text-black content-center
          overflow-x-scroll py-4 mx-2 text-xl font-droid font-bold 
          lg:overflow-hidden lg:justify-around 2xl:w-1/2"
        >
          {filterData.map((item) => (
            <NavLink
              to={`/search/${item.title}`}
              key={item.id}
              className={({ isActive }) => (isActive ? activStyle : btnStyle)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
