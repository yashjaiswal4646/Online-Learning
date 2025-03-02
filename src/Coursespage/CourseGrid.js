import CourseCard from "./CourseCard";

const CourseGrid = () => {
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
    <section className="flex flex-col items-center w-full px-6 mt-20 max-md:px-5 max-md:mt-10">
      {/* Align heading to the left */}
      <h2 className="self-start w-full text-4xl text-white">Courses That Work</h2>

      {/* Grid container centered */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-20 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="flex">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
