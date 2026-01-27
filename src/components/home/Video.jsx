const Video = () => {
  return (
    <div className="h-full w-full">
      <video
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
