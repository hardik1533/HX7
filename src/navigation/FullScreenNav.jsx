import React, { useContext, useRef } from "react";
import { navContext } from "../context/ContextNav";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FullScreenNav = () => {

    const [navOpen, setNavOpen] = useContext(navContext)
    const navigate = useNavigate()
    
    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block',
            ease: "power2.in"
        })
        tl.to('.stairing', {
            duration: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            },
            ease: "power2.in"
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.1
            },
            ease: "power3.in"
        })
        tl.to('.navlink', {
            x: 0,        
            opacity: 1,  
            duration: 0.1,
            ease: "power3.out"

        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            },
            ease: "power3.in"
        })

        tl.to('.navlink', {
            x : 200,
            opacity: 0,
            duration: 0.2,
            ease: "power3.in",
        })

        tl.to('.stairing', {
            duration: 0.2,
            height: 0,
            ease: "power2.in",
            stagger: {
                amount: -0.3
            }
        })
        
        tl.to('.fullscreennav', {
            display: 'none',
            ease: "power2.in"
        })
    }
    useGSAP(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
            gsapAnimation();
        } else {
            document.body.style.overflow = "auto";
            gsapAnimationReverse();
        }
}, [navOpen]);

// navigation handler
    function handleNavigate(path) {
        setNavOpen(false);      // close menu
        navigate(path);        // go to page
    }

    return (
        <div className="fullscreennav fixed top-0 left-0 h-screen w-full z-50">
                {/* Stair Animation */}
                <div className="h-screen w-full fixed">
                        <div className="h-full w-full flex ">
                                <div className="stairing h-full w-1/5 bg-black"></div>
                                <div className="stairing h-full w-1/5 bg-black"></div>
                                <div className="stairing h-full w-1/5 bg-black"></div>
                                <div className="stairing h-full w-1/5 bg-black"></div>
                                <div className="stairing h-full w-1/5 bg-black"></div>
                        </div>
                </div>

                {/* Full Page */}
                <div className="relative">
                        {/* NAVBAR*/}
                        <div className="flex w-full justify-between items-start lg:p-3 p-2">
                                {/* NAVBAR K72 SVG */}
                                <div className="lg:w-31 w-26">
                                    <svg
                                        className="w-full "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 103 44"
                                    >
                                        <path
                                            fill="white"
                                            d="M 46.92963,44.001548 C 53.541384,29.233661 60.122192,14.455459 67.706882,0.01188397 L 57.035297,0.01546072 C 47.211746,19.467887 40.839598,29.460875 33.201198,43.993464 Z M 20.893132,0.00492361 21.054055,44.046653 30.047343,44.012682 29.754795,0.00316661 Z M 70.120189,0.02134662 65.47615,10.036719 95.105988,6.3556153 C 83.280801,21.981566 82.388056,32.084781 75.645949,44.0076 l 15.462814,-0.006 C 94.893381,29.200967 93.91585,25.494358 103.07871,0.02286013 Z M 0.10633755,43.996939 l 8.75742985,0.029 C 8.5814382,30.37338 8.7222326,15.158753 8.8676737,0.0089972 H 0.08124605 Z M 32.611678,4.5825345e-5 C 44.458544,12.157789 53.516436,26.38945 57.292192,44.003416 l 11.753042,-0.0067 C 65.443581,25.295768 47.37198,1.5106731 44.402195,0.03653269 Z M 8.4619165,22.722429 21.024605,31.471162 c 0,0 -5.471021,-4.693321 -5.212651,-6.781743 0.313835,-2.536744 5.250394,-3.859624 5.250394,-3.859624 z"
                                        ></path>
                                    </svg>
                                </div>
                                {/* X */}
                                <div onClick={() => {setNavOpen(false)}} className="navlink relative lg:w-29 lg:h-29 w-24 h-24 cursor-pointer group">
                                    <div className="lg:h-40 h-33 w-0.5 bg-white absolute -rotate-45 origin-top  group-hover:bg-[#d3fd50]"></div>
                                    <div className="lg:h-40 h-33 w-0.5 bg-white absolute rotate-45 right-0 origin-top  group-hover:bg-[#d3fd50]"></div>
                                </div>

                        </div>
                        {/* Main Page */}
                        <div className="all-links lg:py-15 py-[25vh] uppercase cursor-pointer">
                                {/* Main page - Options Like Home Projets etc. */}
                                    <div
                                    onClick={()=>{handleNavigate("/")}} 
                                    className="link origin-top relative border-gray-500 border-t">
                                            {/* Text */}
                                            <h1
                                            className="font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Home</h1>
                                            {/* Animation on Hover */}
                                            <div className="movelink absolute flex top-0 bg-[#d3fd50] text-black">
                                                    <div className="moveX flex items-center">
                                                            <h2 className="whitespace-nowrap font-[font2] text-center  text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Start Here</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                                src="/assets/images/navimage/home.png"
                                                                alt=""
                                                            />
                                                            <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Go Beyond</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                                src="/assets/images/navimage/home.png"
                                                                alt=""
                                                            />
                                                    </div>
                                                    <div className="moveX flex items-center">
                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Start Here</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                            src="/assets/images/navimage/home.png"
                                                            alt=""
                                                        />


                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Go Beyond</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                            src="/assets/images/navimage/home.png"
                                                            alt=""
                                                        />

                                                    </div>
                                            </div>
                                    </div>
                                    <div 
                                    onClick={()=>{handleNavigate("/brands")}}
                                    className="link origin-top relative border-gray-500 border-t">
                                            {/* Text */}
                                            <h1 className="font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Brands</h1>
                                            {/* Animation on Hover */}
                                            <div className="movelink absolute flex top-0 bg-[#d3fd50] text-black">
                                                    <div className="moveX flex items-center">
                                                            <h2 className="whitespace-nowrap font-[font2] text-center  text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Legacy builders</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] h-[11vw] w-[25vw]  lg:mt-2 mt-0.5 shrink-0 object-cover"
                                                                src="/assets/images/navimage/lambo.png"
                                                                alt=""
                                                            />
                                                            <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Empire rulers</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] h-[11vw] w-[25vw]  lg:mt-2 mt-0.5 shrink-0 object-cover"
                                                                src="/assets/images/navimage/ferrari.png"
                                                                alt=""
                                                            />
                                                    </div>
                                                    <div className="moveX flex items-center">
                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Legacy builders</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] h-[11vw] w-[25vw]  lg:mt-2 mt-0.5 shrink-0 object-cover"
                                                            src="/assets/images/navimage/lambo.png"
                                                            alt=""
                                                        />


                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Empire rulers</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] h-[11vw] w-[25vw]  lg:mt-2 mt-0.5 shrink-0 object-cover"
                                                            src="/assets/images/navimage/ferrari.png"
                                                            alt=""
                                                        />

                                                    </div>
                                            </div>
                                    </div>
                                    <div 
                                    onClick={()=>{handleNavigate("/legacy")}}
                                    className="link origin-top relative border-gray-500 border-t">
                                            {/* Text */}
                                            <h1 className="font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Legacy</h1>
                                            {/* Animation on Hover */}
                                            <div className="movelink absolute flex top-0 bg-[#d3fd50] text-black">
                                                    <div className="moveX flex items-center">
                                                            <h2 className="whitespace-nowrap font-[font2] text-center  text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Timeless</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[21vw] md:w-[20vw] sm:w-[30vw] h-[11vw] w-[30vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover "
                                                                src="/assets/images/navimage/nav0.png"
                                                                alt=""
                                                            />
                                                            <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Drive</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[21vw] md:w-[20vw] sm:w-[30vw] h-[11vw] w-[30vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover "
                                                                src="/assets/images/navimage/nav1.png"
                                                                alt=""
                                                            />
                                                    </div>
                                                    <div className="moveX flex items-center">
                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Timeless</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[21vw] md:w-[20vw] sm:w-[30vw] h-[11vw] w-[30vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover "
                                                            src="/assets/images/navimage/nav0.png"
                                                            alt=""
                                                        />


                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Drive</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[21vw] md:w-[20vw] sm:w-[30vw] h-[11vw] w-[30vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover "
                                                            src="/assets/images/navimage/nav1.png"
                                                            alt=""
                                                        />

                                                    </div>
                                            </div>
                                    </div>
                                    <div 
                                    onClick={()=>{handleNavigate("/empire")}}
                                    className="link origin-top relative border-gray-500 border-y   ">
                                            {/* Text */}
                                            <h1 className="font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Empire</h1>
                                            {/* Animation on Hover */}
                                            <div className="movelink absolute flex top-0 bg-[#d3fd50] text-black">
                                                    <div className="moveX flex items-center">
                                                            <h2 className="whitespace-nowrap font-[font2] text-center  text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Endless</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                                src="/assets/images/navimage/nav2.png"
                                                                alt=""
                                                            />
                                                            <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Rule</h2>
                                                            <img
                                                                className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                                src="assets/images/navimage/nav3.png"
                                                                alt=""
                                                            />
                                                    </div>
                                                    <div className="moveX flex items-center">
                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Endless</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                            src="assets/images/navimage/nav2.png"
                                                            alt=""
                                                        />


                                                        <h2 className="whitespace-nowrap font-[font2] text-center text-[14vw] leading-[10vw] pt-3 sm:text-[15vw] sm:leading-[10vw] sm:pt-5 md:text-[10vw] md:leading-[8vw] md:pt-3 lg:text-[8vw] lg:leading-[5.8vw] lg:pt-8">Rule</h2>

                                                        <img
                                                            className="lg:h-[7vw] md:h-[8vw] sm:h-[11vw] lg:w-[25vw] md:w-[30vw] sm:w-[40vw] h-[11vw] w-[40vw] lg:mx-7 mx-3 lg:mt-2 mt-0.5 shrink-0 object-cover rounded-full"
                                                            src="assets/images/navimage/nav3.png"
                                                            alt=""
                                                        />

                                                    </div>
                                            </div>
                                    </div>
                        </div>
                </div>
        </div>
    );
};

export default FullScreenNav;
