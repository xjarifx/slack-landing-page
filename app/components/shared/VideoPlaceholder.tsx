interface VideoPlaceholderProps {
  className?: string;
  showPlayButton?: boolean;
  message?: string;
}

export default function VideoPlaceholder({ 
  className = '', 
  showPlayButton = true,
  message = 'Video coming soon'
}: VideoPlaceholderProps) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-xl bg-[#3b0764] relative flex items-center justify-center ${className}`}>
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-3/4 rounded-full bg-blue-300 opacity-20 blur-3xl" />
      
      {/* Play button and text */}
      {showPlayButton && (
        <div className="relative z-10 flex flex-col items-center gap-3 text-white/40">
          <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
            <polygon points="26,20 26,44 48,32" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium tracking-wide">{message}</span>
        </div>
      )}
    </div>
  );
}
