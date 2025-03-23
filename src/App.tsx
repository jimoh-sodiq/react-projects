import { useState } from "react";
import Accordion from "./modules/accordion/accordion";
import RandomColorGenerator from './modules/random-color-generator/randomColor';
import StarRating from './modules/star-rating';

function App() {

  return (
    <>
      <nav className="p-4 bg-gray-700 text-white mb-4">React Projects</nav>
      <main className='flex flex-col gap-6'>
        {/* <Accordion /> */}
        {/* <RandomColorGenerator /> */}
        <StarRating />
      </main>
    </>
  );
}

export default App;
