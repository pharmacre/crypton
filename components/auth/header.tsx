'use client';

import React, { FC } from 'react';
import Container from '@/layouts/container';

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }) => (
  <Container className="flex-col gap-2">
    <h1>Authorization</h1>
    <p>{label}</p>
  </Container>
);

export default Header;
