'use client';

import React from 'react';
import LoginForm from '@/components/auth/login-form';
import cn from 'classnames';
import ShadowGradient from '@/components/ui/shadow-gradient';
import Background from '@/components/backgrounds/bubbles-background';
import Container from '@/layouts/container';

const LoginPage = () => (
  <Background>
    <Container>
      <ShadowGradient className={cn(`-inset-2 opacity-70 blur-lg
         bg-gradient-to-br from-rose-900/30 via-emerald-900/30
         to-violet-900/30`)}>
        <LoginForm />
      </ShadowGradient>
    </Container>
  </Background>
);

export default LoginPage;
