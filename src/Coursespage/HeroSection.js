const HeroSection = () => {
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
        <div class="w-[600px] h-[600px] bg-gradient-radial from-purple-900 to-white absolute left-[30%] bottom-[35%] -z-1"></div>

      </section>
      {/* <div class="w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-radial from-purple-900 to-black absolute left-1/3 bottom-1/3 -z-10"></div> */}

    </>

    );
  };
  
  export default HeroSection;
  