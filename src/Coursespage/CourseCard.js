const CourseCard = ({ image, title, price, originalPrice, discount }) => {
  return (
    <article className="flex flex-col h-full border border-solid rounded-md border-fuchsia-700 bg-stone-950">
      <div className="flex flex-col flex-grow p-5">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-full h-48 rounded-md"
        />
        <div className="flex flex-col flex-grow w-full mt-5">
          <h3 className="text-xl text-white">{title}</h3>
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
                ₹{price} (+ GST){" "}
                <span className="text-gray-400 line-through">₹{originalPrice}</span>
              </p>
            </div>
            <span className="self-end text-base text-white">{discount} OFF</span>
          </div>
        </div>
      </div>
      <button className="self-center w-full px-6 py-2 mt-4 text-xl text-white transition-colors border rounded-md border-fuchsia-500 bg-fuchsia-950 hover:bg-fuchsia-900">
        View Details
      </button>
    </article>
  );
};

export default CourseCard;
