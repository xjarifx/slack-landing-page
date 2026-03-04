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
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1c1d]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
