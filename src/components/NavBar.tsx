import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/imgs/star-wars-logo.png';

function NavBar() {
  return (
    <>
      <div
        className="flex justify-center bg-black w-full h-max 
      border-b-[1.5px] border-yellow-500"
      >
        <Link to="/" className="py-6 w-max">
          <img src={Logo} alt="Star-Wars" className="w-[300px]" />
        </Link>
      </div>
    </>
  );
}

export default NavBar;
