import React from 'react';
import { NavLink } from 'react-router-dom';

import { filterData } from '../assets/constData/filterData';

const btnStyle = 'capitalize bg-yellow-500 px-6 py-1 rounded-full';
const activStyle = `capitalize px-6 py-1 rounded-full bg-inherit
text-yellow-400  border-2 border-yellow-400`;

function SearchFilter() {
  return (
    <>
      <div className="flex justify-center bg-black">
        <div
          className="w-[50%] flex justify-around text-black 
            py-4 text-xl font-droid font-bold"
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
