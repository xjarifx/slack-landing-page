interface VideoPlaceholderProps {
  className?: string;
  videoSrc?: string;
}

export default function VideoPlaceholder({ 
  className = '', 
  videoSrc = '/videos/slack.mp4'
}: VideoPlaceholderProps) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-xl relative ${className}`}>
      <video 
        className="w-full h-full object-cover"
        controls
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
