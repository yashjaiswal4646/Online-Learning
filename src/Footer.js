const Footer = () => {
  return (
    <footer className="text-white mt-14">
      <hr className="border-fuchsia-700" />
      <div className="flex flex-wrap gap-10 mt-14 w-full max-w-[1020px] px-10 max-md:mt-10">
        
        {/* Social Media Icons (Left Side) */}
        <div className="flex my-auto gap-7">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2474a4156c29731868e21a5ec3cbade4d59e1933b8b114542b306a4b5f1c1ae6"
            alt="Social Icon 1"
            className="w-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/021bf6574028dc9196ce414f60de8f883ab55f37f16fc32b28133ccbc44aa13c"
            alt="Social Icon 2"
            className="w-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcf076a8d4bcccdabcbb2499e7c4033fa2f834f7074047904b2d6c1f412f376"
            alt="Social Icon 3"
            className="w-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c745b447df4379daa2fd3aba12a5cbf51e02527bb0e815639ab3ab16d460d80e"
            alt="Social Icon 4"
            className="w-10"
          />
        </div>

        {/* Shifted Left with ml-20 */}
        <div className="ml-80">
          <nav className="flex justify-start">
            <div className="grid grid-cols-2 gap-14">
              {/* Legal Section */}
              <div className="text-base">
                <h3 className="mb-6 text-2xl">Legal</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Docs</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Privacy Policy</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Terms of Service</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Pricing Policy</a>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div className="text-base">
                <h3 className="mb-6 text-xl">Quick Links</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Courses</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Cohort</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <a href="#" className="hover:text-fuchsia-500">Coding Hero</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
