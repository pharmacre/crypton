'use client';

import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({
  asChild,
  mode = 'redirect',
  children,
}) => {
  const router = useRouter();
  const onClick = () => router.push('/login');

  return (
    <span
      onClick={onClick}
      className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
