interface MobileSectionTitleProps {
  title: string;
}

export default function MobileSectionTitle({ title }: MobileSectionTitleProps) {
  return (
    <div className="md:hidden mb-8">
      <h2 className="text-3xl font-extrabold text-[#4a154b] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
