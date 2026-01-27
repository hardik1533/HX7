import { Link } from "react-router";
import Hyperspeed from "../common/Hyperspeed";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      
      {/* 🔥 Center Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[9rem] leading-none font-extrabold tracking-tight text-white/90">
          404
        </h1>

        <p className="mt-4 text-lg text-white/60 tracking-wide">
          The page you’re looking for doesn’t exist
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-8 py-3 rounded-full border border-white/30 
                     text-sm tracking-widest uppercase
                     hover:bg-[#d3fd50] hover:text-black hover:border-transparent
                     transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* ⚡ Hyperspeed Background */}
      <div className="absolute inset-x-0 bottom-0 h-[75vh] overflow-hidden pointer-events-none opacity-80">
        <Hyperspeed activePreset="five" />
      </div>

      {/* 🖤 Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
};

export default NotFound;
