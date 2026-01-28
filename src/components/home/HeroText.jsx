import Video from "./Video";

const HeroText = () => {
  return (
    <div className="font-[font2] pt-1 mt-[73dvh] lg:mt-0 md:mt-[55dvh] sm:mt-[65dvh] text-center font-bold">
      
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[7.9vw] leading-[8.5vw] flex justify-center items-center">
        the Power
      </div>

      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9.7vw] leading-[10vw] justify-center flex items-start">
        for
        <div className="h-[7vw] w-[16vw] rounded-full lg:mt-2 mt-1 overflow-hidden">
          <Video />
        </div>
        Bright
      </div>

      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[6.9vw] leading-[10vw] flex justify-center items-center">
        Kingdom
      </div>

    </div>
  );
};

export default HeroText;
