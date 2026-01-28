const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover rounded-full"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/video-poster.jpg"
      >
        <source src="/assets/HomeVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
