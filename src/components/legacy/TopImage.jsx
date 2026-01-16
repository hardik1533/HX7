import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const TopImage = () => {
    gsap.registerPlugin(ScrollTrigger);

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const mm = ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 768px)": () => {
                const trigger = gsap.to(imageDivRef.current, {
                    scrollTrigger: {
                        trigger: imageDivRef.current,
                        start: "top 30%",
                        end: "top -85%",
                        pin: true,
                        pinSpacing: true,
                        pinType: "transform",
                        scrub: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onUpdate: (elem) => {
                            const imageIndex = Math.floor(elem.progress * 9);
                            imageRef.current.src = `assets/images/legacy/topimages/${imageIndex}.png`;
                        },
                    },
                });
                return () => trigger.scrollTrigger?.kill();
            },

            // Mobile
            "(max-width: 767px)": () => {
                const trigger = gsap.to(imageDivRef.current, {
                    scrollTrigger: {
                        trigger: imageDivRef.current,
                        start: "top 64%",
                        end: "top 0%",
                        scrub: true,
                        // markers:true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onUpdate: (elem) => {
                            const imageIndex = Math.floor(elem.progress * 9);
                            imageRef.current.src = `assets/images/legacy/topimages/${imageIndex}.png`;
                        },
                    },
                });
                return () => trigger.scrollTrigger?.kill();
            },
        });

        return () => mm.revert(); // cleanup on unmount
    });

    return (
        <div
            ref={imageDivRef}
            className="absolute top-[64vh] lg:top-62 lg:left-[30vw] lg:h-[19vw] lg:w-[35vw] md:top-[30vh] md:left-[15vw] md:h-[30vh] md:w-[70vw] sm:top-[58vh] sm:left-[10vw] sm:h-[25vh] sm:w-[80vw] rounded-2xl overflow-hidden"
        >
            <img
                ref={imageRef}
                className="h-full w-full object-cover"
                src="assets/images/legacy/topimages/0.png"
                alt="Legacy Cars"
            />
        </div>
    );
};

export default TopImage;