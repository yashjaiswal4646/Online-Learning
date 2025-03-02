import React from "react";

export const CourseHero = () => {
  return (
    <>
    <section className="flex flex-col items-center">
      <h2 className="mt-20 text-white text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        WEB DEV <span className="text-[#A21FB6]">COHORT</span>   
      </h2>
      
      <div className="flex flex-wrap gap-5 justify-between mt-36 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <button className="px-20 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
          HTML
        </button>
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <button className="grow px-24 py-5 mr-56 whitespace-nowrap border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            CSS
          </button>
          <button className="grow px-10 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            JAVASCRIPT
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-5 justify-between mt-20 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <button className="px-16 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
          NEXT.JS
        </button>
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <button className="grow px-20 py-5 mr-56 whitespace-nowrap border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            NODE
          </button>
          <button className="grow px-12 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            DATABASE
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};
