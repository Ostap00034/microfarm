const VideoPlayer = ({ src }) => {
  return (
    <div>
      <video autoPlay controls muted className="rounded-[12px]">
        <source src={src} type="video/mp4" />
        {/* Дополнительные источники видео, например, для разных форматов */}
        <source src={src} type="video/webm" />
        <source src={src} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
