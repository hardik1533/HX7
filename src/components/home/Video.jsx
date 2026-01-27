import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const Video = () => {
  const videoRef = useRef(null);
  const soundEnabled = useRef(false);

  useEffect(() => {
    const enableSoundSmooth = () => {
      if (soundEnabled.current) return;

      const video = videoRef.current;
      if (!video) return;

      soundEnabled.current = true;

      // 🔊 Unmute safely
      video.muted = false;
      video.volume = 0;
      video.play().catch(() => {});

      // 🎚️ Smooth volume fade-in (NO LAG)
      let vol = 0;
      const fade = setInterval(() => {
        vol += 0.05;
        video.volume = Math.min(vol, 1);
        if (vol >= 1) clearInterval(fade);
      }, 40); // ~800ms fade

      // 🧠 GSAP refresh to avoid scroll jitter
      ScrollTrigger.refresh();

      // 🧹 Remove listeners after first interaction
      window.removeEventListener("scroll", enableSoundSmooth);
      window.removeEventListener("click", enableSoundSmooth);
      window.removeEventListener("touchstart", enableSoundSmooth);
      window.removeEventListener("mousemove", enableSoundSmooth);
    };

    // 👆 First user interaction = sound unlock
    window.addEventListener("scroll", enableSoundSmooth, { once: true });
    window.addEventListener("click", enableSoundSmooth, { once: true });
    window.addEventListener("touchstart", enableSoundSmooth, { once: true });
    window.addEventListener("mousemove", enableSoundSmooth, { once: true });

    return () => {
      window.removeEventListener("scroll", enableSoundSmooth);
      window.removeEventListener("click", enableSoundSmooth);
      window.removeEventListener("touchstart", enableSoundSmooth);
      window.removeEventListener("mousemove", enableSoundSmooth);
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
