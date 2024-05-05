'use client';

import { FC, ReactNode } from 'react';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Header from '@/components/auth/header';
import Social from '@/components/auth/social';
import BackButton from '@/components/auth/back-button';

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: FC<CardWrapperProps> = ({
  backButtonHref,
  backButtonLabel,
  showSocial,
  headerLabel,
  children,
}) => {
  return (
    <Card
      className="w-[400px] bg-black border-0 bg-opacity-20 shadow-xl
      backdrop-blur-md text-white">
      <CardHeader>
        <Header label={headerLabel} />
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter className="py-0">
            <Social />
          </CardFooter>
        )}
        <CardFooter className="py-0">
          <BackButton
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default CardWrapper;
