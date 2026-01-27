import { useRef, useEffect } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const enableSound = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      video.volume = 1;
      video.play();

      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("click", enableSound);
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };

    window.addEventListener("scroll", enableSound, { once: true });
    window.addEventListener("click", enableSound, { once: true });
    window.addEventListener("mousemove", enableSound, { once: true });
    window.addEventListener("touchstart", enableSound, { once: true });

    return () => {
      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("click", enableSound);
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/assets/HomeVideo.mp4"
      />
    </div>
  );
};

export default Video;
