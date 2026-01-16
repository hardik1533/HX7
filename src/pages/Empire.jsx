import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVelocity from "../common/ScrollVelocity";
import { navColorContext } from "../context/ContextNav";
import TopImage from "../components/empire/TopImage";
import TopText from "../components/empire/TopText";
import Bottom from "../components/empire/Bottom";

gsap.registerPlugin(ScrollTrigger);



const Empire = () => {

    const [navColor, setNavColor] = useContext(navColorContext)

    const parentRef = useRef(null);
    const scrollVelocityRef = useRef(null);

    useEffect(() => {
        // 🔥 PURE PAGE THEME CHANGE
        gsap.to(parentRef.current, {
            backgroundColor: "#000",
            color: "#fff",
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: scrollVelocityRef.current,
                start: "top 60%",
                end: "top 20%",
                scrub: 1,

                onEnter: () => setNavColor("white"),
                onLeaveBack: () => setNavColor("black"),
            },
        });

        // 🔥 ScrollVelocity TEXT COLOR CHANGE
        gsap.to(scrollVelocityRef.current, {
            color: "#d3fd50",
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: scrollVelocityRef.current,
                start: "top 60%",
                end: "top 20%",
                scrub: 1,
            },
        });
    }, []);


    return (
        <div ref={parentRef} className="parent">

            <div id="page1" className="pt-5 ">
                <TopImage/>
                <TopText/>
            </div>

            <div
                ref={scrollVelocityRef}
                className="pt-[80vh] pb-[80vh] text-black uppercase"
            >
                <ScrollVelocity texts = {['    RULE THE FUTURE    ','    ENGINEERED TO RULE   ']} />
            </div>

            <div id="page2">
                <Bottom/>
            </div>
        </div>
    );
};

export default Empire;