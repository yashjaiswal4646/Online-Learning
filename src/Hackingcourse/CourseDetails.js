import React from "react";

export const CourseDetails = () => {
  return (
    <section className="mt-40 ml-20 w-full max-w-[1238px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/5 max-md:w-full">
          <article className="w-full px-px pt-px pb-12 mx-auto border border-solid rounded-xl border-fuchsia-700 bg-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6032fd3cd6b48b8fc2c4189c41d3fffcd4477d43fb4e86f4465f631ffce6a07"
              alt="Course preview"
              className="object-contain w-full rounded-md aspect-[1.89]"
            />
            <div className="flex flex-wrap gap-3.5 mt-14 ml-4 text-3xl text-white">
              <span className="grow px-11 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit  hover:bg-fuchsia-900 transition-colors">
                Language: Hindi
              </span>
              <span className="grow px-11 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit  hover:bg-fuchsia-900 transition-colors">
                Certificate: YES
              </span>
            </div>
            <div className="flex gap-5 mx-3 mt-11">
              <div className="w-1/2">
                <div className="px-7 pt-4 pb-7 text-3xl text-white border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px]  hover:bg-fuchsia-900 transition-colors">
                  Schedule: Mon-Sat
                  <br />
                  (8:30PM)
                </div>
              </div>
              <div className="w-1/2">
                <div className="px-6 pt-3.5 pb-8 text-3xl text-white border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px]  hover:bg-fuchsia-900 transition-colors">
                  Total Content: 150+
                  <br /> Hours
                </div>
              </div>
            </div>
          </article>
        </div>
        <aside className="flex flex-col items-start self-stretch w-2/5 my-auto text-white ml-9 max-md:mt-10">
          <h3 className="self-stretch text-4xl">
            Price 3000 <span className="text-2xl text-white">₹</span>
            <span className="text-2xl text-white line-through">6000</span> (+
            GST)
          </h3>
          <p className="mt-2.5 text-xl">Limited Time Discount Applied!</p>
          <button className="px-4 py-1.5 mt-5 text-4xl text-white rounded-2xl border border-fuchsia-500 border-solid bg-fuchsia-950 bg-opacity-80 hover:bg-opacity-100 transition-colors">
            Buy Now
          </button>
          <p className="mt-2.5 text-base">
            Batch Starts on <span className="text-[#A60AA3]">21st May, 25</span>
          </p>
        </aside>
      </div>
    </section>
  );
};
