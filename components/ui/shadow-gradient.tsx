"use client"

import cn from 'classnames'
import React, { PropsWithChildren } from 'react';

interface ShadowGradientProps extends PropsWithChildren {
  className?: string;
}

const ShadowGradient: React.FC<ShadowGradientProps> = ({
  children,
  className
}) => (
  <div className="relative p-4">
    <div className={cn(`absolute inset-0 rounded-xl ${className}`)}/>
    {children}
  </div>
);

export default ShadowGradient;
