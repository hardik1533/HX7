import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router";


const Stairs = (props) => {
  const currPath = useLocation().pathname;

  const pageRef = useRef(null);

  const stairParentRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.to(stairParentRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        duration: 0.2,
        stagger: {
          amount: -0.2,
        },
        ease: "power2.in"
      });

      tl.to(".stair", {
        y: "100%",
        duration: 0.4,
        stagger: {
          amount: -0.3,
        },
        ease: "power2.in"
      });

      tl.to(stairParentRef.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0",
        ease: "power2.in"
      });

      gsap.fromTo(pageRef.current,
        { opacity: 0, scale: 1.2, transformOrigin: "top center" },
        { opacity: 1, scale: 1, delay: 1, duration: 0.8,clearProps: "transform" }
      );
    },
    [currPath]
  );

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full z-20 top-0 fixed">
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
