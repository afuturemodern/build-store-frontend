import React from 'react';
import { cn } from '@/utils/cn'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = "primary",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  ...props 
}) => {
  const baseStyles = [
    "inline-flex items-center justify-center",
    "rounded-lg font-medium",
    "transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "active:scale-95 transform",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ];

  const variants = {
    primary: [
      "bg-black text-white hover:bg-gray-800",
      "border border-black hover:border-gray-800",
      "focus:ring-black"
    ],
    secondary: [
      "bg-white text-black hover:bg-gray-50",
      "border border-gray-300 hover:border-gray-400",
      "focus:ring-gray-500"
    ],
    outline: [
      "bg-transparent text-black hover:bg-gray-50",
      "border border-black hover:border-gray-800",
      "focus:ring-black"
    ]
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
  };

  return (
    <button
      className={cn(
        ...baseStyles,
        ...variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;