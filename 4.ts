import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>;
};

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
};