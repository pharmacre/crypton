import React from 'react';
import Container from '@/layouts/container';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Social = () => {
  return (
    <Container className="gap-x-2">
      <Button
        size="lg"
        className="w-full bg-black/40 border-0"
        variant="outline">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-black/40 border-0"
        variant="outline">
        <FaGithub className="w-5 h-5" />
      </Button>
    </Container>
  );
};

export default Social;
