import { COLORS } from '@/app/lib/constants';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href = '#',
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'rounded px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors';
  
  const variantStyles = {
    primary: `bg-[${COLORS.primary}] text-white hover:bg-[${COLORS.primaryDark}]`,
    secondary: `border border-[${COLORS.primary}] text-[${COLORS.primary}] hover:bg-[${COLORS.lightBg}]`,
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={combinedClassName}>
      {children}
    </a>
  );
}
