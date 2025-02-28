
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ 
  children, 
  variant = 'default', 
  className, 
  onClick, 
  icon,
  type = 'button'
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2",
        variant === 'default' 
          ? 'bg-white text-black hover:bg-white/90' 
          : 'bg-[#c6e957] text-black hover:bg-opacity-90',
        className
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
