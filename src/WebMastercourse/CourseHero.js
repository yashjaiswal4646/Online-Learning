import React from "react";

export const CourseHero = () => {
  return (
    <>
    <section className="flex flex-col items-center">
      <h2 className="mt-20 text-white text-7xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="ml-8 text-8xl">Web Development <span className="text-[#A21FB6]"> Master </span></span><br/>
        <span className="ml-40 ">Course @dot 1.0 Batch</span>  
      </h2>
      
      <div className="flex flex-wrap gap-5 justify-between mt-36 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <button className="px-24 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
         React.js
        </button>
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <button className="grow px-24 py-5 mr-28 whitespace-nowrap border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Node.js
          </button>
          <button className="grow px-24 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Express.js
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-5 justify-between mt-20 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <button className="px-24 py-5 ml-44 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
          MongoDB
        </button>
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <button className="grow px-14 py-5 mr-44 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Project-focused
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};
