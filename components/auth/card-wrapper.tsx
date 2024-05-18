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
  onMouseOut?: () => void;
  onMouseOver?: () => void;
  showSocial?: boolean;
}

const CardWrapper: FC<CardWrapperProps> = ({
  backButtonHref,
  backButtonLabel,
  showSocial,
  headerLabel,
  children,
  onMouseOut,
  onMouseOver
}) => {

  return (
    <Card
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      className="w-full md:w-[400px] bg-gradient-to-b from-zinc-800 to-neutral-900
      border-0 backdrop-blur-md text-white">
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
