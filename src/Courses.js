import React from "react";

const Courses = () => {
  const courses = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27c11bf3a41bd0c313b2c93a1e850a5ea8b5fcbf63e3a134f611b620d0d12e3c",
      title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
      price: "5999",
      originalPrice: "11999",
      discount: "50%",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7c44ea131fd1f3c04ec995f899820995690c78daf31e406a4c160860ece0c2e",
      title: "Online Ethical Hacking & Penetration Testing",
      price: "7000",
      originalPrice: "15000",
      discount: "50%",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23b7edf7137cfd609cdf016c84717b139e073349b1b00c8233a7e74ba8ad0cd1",
      title: "Advanced Ethical Hacking Course",
      price: "7000",
      originalPrice: "15000",
      discount: "50%",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac324d81d73c4879b217e963759e5a6dedfb7d5b1745001120df4a9058c794c3",
      title: "Web Dev Cohort - Live 1.0",
      price: "4000",
      originalPrice: "8000",
      discount: "50%",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a59cc2a23344bccb58346fdee386466c67209f8b42f88a3b70a5491bcd18351",
      title: "Web Development Master Course",
      price: "3000",
      originalPrice: "6000",
      discount: "50%",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f47ccedc169a3cadb3616317b47ce49e154d2151975d73f25a7e5d03eafe4b18",
      title: "Complete Node.js + Express.js + MongoDB",
      price: "6000",
      originalPrice: "11999",
      discount: "50%",
    },
  ];

  return (
    <>
      <section className="text-center mt-28 max-md:mt-10">
        <h2 className="text-white text-8xl max-md:text-4xl">
          We're not a <span className="text-[#A60AA3]">course</span> <br />
          <span className="text-[#A60AA3]">factory.</span>
        </h2>
        <p className="text-4xl text-white mt-9">
          We focus on courses that really help.
        </p>
      </section>

      <section className="flex flex-col items-center w-full px-6 mt-20 max-md:px-5 max-md:mt-10">
        <h2 className="self-start w-full text-4xl text-white">Courses That Work</h2>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-20 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article key={index} className="flex flex-col h-full border border-solid rounded-md border-fuchsia-700 bg-stone-950">
              <div className="flex flex-col flex-grow p-5">
                <img
                  loading="lazy"
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-48 rounded-md"
                />
                <div className="flex flex-col flex-grow w-full mt-5">
                  <h3 className="text-xl text-white">{course.title}</h3>
                  <div className="flex gap-4 mt-3.5">
                    <span className="px-2 py-1 text-sm text-white border rounded-md border-fuchsia-600 bg-fuchsia-950 bg-opacity-60">
                      LIVE BATCH
                    </span>
                    <span className="px-3 py-1 text-base text-white border border-solid rounded-md bg-fuchsia-950 bg-opacity-60 border-stone-900">
                      HINDI
                    </span>
                  </div>
                  <div className="flex justify-between gap-5 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-base text-white">Limited Time Discount</span>
                      <p className="mt-2 text-lg text-white">
                        ₹{course.price} (+ GST) <span className="text-gray-400 line-through">₹{course.originalPrice}</span>
                      </p>
                    </div>
                    <span className="self-end text-base text-white">{course.discount} OFF</span>
                  </div>
                </div>
              </div>
              <button className="self-center w-full px-6 py-2 mt-4 text-xl text-white transition-colors border rounded-md border-fuchsia-500 bg-fuchsia-950 hover:bg-fuchsia-900">
                View Details
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
