import React from "react";

export const CourseHero = () => {
  return (
    <>
    <section className="flex flex-col items-center">
      <h2 className="mt-20 text-white text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Online Ethical <span className="text-[#A21FB6]">Hacking </span> Courses 
      </h2>
      <p className="items-center ml-3 text-4xl text-white mt-14 max-md:mt-10 max-md:max-w-full">
        Learn the basics of ethical hacking and cyber security with the best{" "}
        <br />
        online ethical hacker course in India. This training program is <br />
        designed for beginners and covers core concepts, hacking <br />
        methodologies, tools, techniques, and more.
      </p>
      <div className="flex flex-wrap gap-5 justify-between mt-36 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <button className="px-16 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
          Networking
        </button>
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <button className="grow px-20 py-5 mr-20 whitespace-nowrap border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Linux
          </button>
          <button className="grow px-10 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Network Scanning
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};
