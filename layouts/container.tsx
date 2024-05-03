import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex h-full w-full justify-center items-center',
        className
      )}>
      {children}
    </div>
  );
};

export default Container;
