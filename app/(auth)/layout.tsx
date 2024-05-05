import React, { FC, PropsWithChildren } from 'react';
import Container from '@/layouts/container';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Container className="flex-col">{children}</Container>;
};

export default AuthLayout;
