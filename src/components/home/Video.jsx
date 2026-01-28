const Video = ({ rounded = false }) => {
  return (
    <div className="h-full w-full">
      <video
        className={`h-full w-full object-cover ${rounded ? "rounded-full" : ""}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="/assets/HomeVideo.mp4"
      />
    </div>
  );
};

export default Video;
