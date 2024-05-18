import React, { FC, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import CardWrapper from '@/components/auth/card-wrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { login } from '@/actions/login';
import useAuth from '@/hooks/useAuth';
import { HooverFormTypes, LoginFormTypes } from '@/types/form-types';

const LoginForm: FC<HooverFormTypes> = ({ onMouseOver, onMouseOut }) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const { signInWithCredential } = useAuth();

  const form = useForm<LoginFormTypes>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormTypes) => {
    setError('');
    setSuccess('');
    signInWithCredential(values);

    startTransition(() => {
      login(values)
        .then(({ success, error }) => {
          setError(error);
          setSuccess(success);
        });
    });
  };

  return (
    <CardWrapper
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonHref="/register"
      showSocial>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
          <div className="space-y-2 md:space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full bg-black/40 hover:bg-white hover:text-black"
            disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
