interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  className?: string;
}

export default function WaveDivider({ 
  topColor = 'white', 
  bottomColor = '#4a1260',
  className = '' 
}: WaveDividerProps) {
  return (
    <div className={`relative -mx-4 h-20 ${className}`}>
      {/* Top arc (concave up) */}
      <div className="absolute inset-x-0 top-0 overflow-hidden">
        <svg 
          viewBox="0 0 1220 128" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className="w-full h-20 block"
        >
          <path d="M0 128 C305 0 915 0 1220 128 L1220 0 L0 0 Z" fill={topColor} />
        </svg>
      </div>
      {/* Bottom arc (concave down) */}
      <div className="absolute inset-x-0 top-0 overflow-hidden">
        <svg 
          viewBox="0 0 1220 128" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className="w-full h-20 block" 
          style={{ transform: 'translateY(1px)' }}
        >
          <path d="M0 0 C305 128 915 128 1220 0 L1220 128 L0 128 Z" fill={bottomColor} />
        </svg>
      </div>
    </div>
  );
}
