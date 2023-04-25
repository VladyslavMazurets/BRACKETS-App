import React from 'react';

import Logo from '../assets/imgs/star-wars-logo.png';

function NavBar() {
  return (
    <>
      <div className="bg-black w-full h-max border-b-[1.5px] border-yellow-600">
        <div className="flex justify-center py-6">
          <img src={Logo} alt="Star-Wars" className="w-[300px]" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
