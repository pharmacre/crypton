import React from 'react';
import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import Container from '@/layouts/container';
import Background from '@/components/backgrounds/bubbles-background';

const HomeScreen = () => (
  <Background>
    <Container className="flex-col gap-6">
      <LoginButton>
        <Button size="lg">Sign in</Button>
      </LoginButton>
    </Container>
  </Background>
);

export default HomeScreen;