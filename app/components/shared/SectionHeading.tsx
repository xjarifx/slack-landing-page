interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  highlightColor?: string;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  highlightColor = 'text-[#611f69]',
  className = '' 
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#1d1c1d]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
