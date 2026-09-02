import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
  ...props
}) => {
  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1380px]',
    full: 'max-w-full',
  }[size];

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidths, className)}
      {...props}
    >
      {children}
    </div>
  );
};
