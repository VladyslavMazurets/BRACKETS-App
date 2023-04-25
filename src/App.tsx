import React from 'react';

import Img from '../src/assets/imgs/stars-bg.jpg';

function App() {
  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full text-7xl text-yellow-400"
      >
        Hello
      </div>
    </>
  );
}

export default App;
