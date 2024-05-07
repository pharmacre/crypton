'use client';

import React, { FC } from 'react';
import Container from '@/layouts/container';

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <Container className="flex-col gap-2">
      <h1>Authorization</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </Container>
  );
};

export default Header;
