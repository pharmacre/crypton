import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/login-button';
import Container from '@/layouts/container';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <Container className="flex-col gap-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Authentication
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </Container>
    </main>
  );
}
