import React, { FC, PropsWithChildren } from 'react';

const BubblesBackground: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-hero w-screen h-screen text-foreground bg-cover">
    {children}
  </div>
);

export default BubblesBackground;