import React, { useContext, useRef } from "react";
import { navColorContext, navContext } from "../context/ContextNav";


const Navbar = () => {

  const [navOpen, setNavOpen] = useContext(navContext)
  const [navColor, setNavColor] = useContext(navColorContext)


  const navGreenRef = useRef(null);
  const navGreenRef1 = useRef(null);
  const navGreenRef2 = useRef(null);

  return (
    <div className="flex fixed top-0 left-0 justify-between items-start w-full z-10 pointer-events-auto">
        <div className="lg:p-3 p-2 lg:w-37 w-30 md:w-35">
          <svg
            className="w-full "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill= {navColor}
              d="M 46.92963,44.001548 C 53.541384,29.233661 60.122192,14.455459 67.706882,0.01188397 L 57.035297,0.01546072 C 47.211746,19.467887 40.839598,29.460875 33.201198,43.993464 Z M 20.893132,0.00492361 21.054055,44.046653 30.047343,44.012682 29.754795,0.00316661 Z M 70.120189,0.02134662 65.47615,10.036719 95.105988,6.3556153 C 83.280801,21.981566 82.388056,32.084781 75.645949,44.0076 l 15.462814,-0.006 C 94.893381,29.200967 93.91585,25.494358 103.07871,0.02286013 Z M 0.10633755,43.996939 l 8.75742985,0.029 C 8.5814382,30.37338 8.7222326,15.158753 8.8676737,0.0089972 H 0.08124605 Z M 32.611678,4.5825345e-5 C 44.458544,12.157789 53.516436,26.38945 57.292192,44.003416 l 11.753042,-0.0067 C 65.443581,25.295768 47.37198,1.5106731 44.402195,0.03653269 Z M 8.4619165,22.722429 21.024605,31.471162 c 0,0 -5.471021,-4.693321 -5.212651,-6.781743 0.313835,-2.536744 5.250394,-3.859624 5.250394,-3.859624 z"
            ></path>
          </svg>

        </div>
        <div
            onClick={()=>{
              setNavOpen(true)
            }}

            onMouseEnter={() => {
              navGreenRef.current.style.height = "100%";
              navGreenRef1.current.style.backgroundColor = "black";
              navGreenRef2.current.style.backgroundColor = "black";
            
            }}
            onMouseLeave={() => {
              navGreenRef.current.style.height = "0%";
              navGreenRef1.current.style.backgroundColor = "white";
              navGreenRef2.current.style.backgroundColor = "white";
            }}

            className="bg-black lg:h-13 h-11 lg:w-[15vw] w-47 relative cursor-pointer"
        >
            <div
              ref={navGreenRef}
              className="bg-[#d3fd50] transition-all w-full top-0 h-0 absolute"
            ></div>
            <div className="relative flex flex-col items-end lg:gap-1 gap-0.5 lg:py-6 py-4.5 lg:px-7 px-5">
              <div ref={navGreenRef1} className="h-0.5 lg:w-13 w-11 bg-white"></div>
              <div ref={navGreenRef2} className="h-0.5 lg:w-6 w-5 bg-white"></div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
