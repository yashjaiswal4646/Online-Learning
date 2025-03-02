import React from "react";

export const CourseSyllabus = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <hr className="self-stretch w-full mt-20 border border-fuchsia-700 min-h-px" />
      <h2 className="mt-16 text-transparent text-9xl max-md:mt-10 max-md:text-4xl bg-gradient-to-t from-purple-200 to-purple-800 bg-clip-text">
        Zero To Job-Ready
      </h2>
      <p className="text-transparent text-8xl max-md:text-4xl bg-gradient-to-t from-purple-200 to-purple-800 bg-clip-text">in 7 months*</p>
      <h3 className="mt-32 text-5xl text-transparent max-md:mt-10 max-md:text-4xl bg-gradient-to-t from-purple-200 to-blue-800 bg-clip-text">
        What you will learn
      </h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/313ec768909aa90f407ef9aa2b864ff4e29d6dc3b62b310edd7e2e7b1d10edf6"
        alt="Course curriculum overview"
        className="object-contain mt-14 w-full rounded-none aspect-[10.99] max-w-[1216px]"
      />
      <h2 className="text-white mt-14 text-9xl max-md:mt-10 max-md:text-4xl">
        Syllabus
      </h2>
      <p className="mt-2.5 text-5xl text-white max-md:text-4xl">
        Dominate. From <span className="text-[#A60AA3]">Start</span> to Victory.
      </p>
      <button className="px-10 py-7 mt-20 max-w-full text-2xl text-white border border-fuchsia-600 border-solid bg-fuchsia-900 bg-opacity-10 rounded-[101px] w-[365px] hover:bg-opacity-20 transition-colors">
        View Complete Syllabus
      </button>
    </section>
  );
};
