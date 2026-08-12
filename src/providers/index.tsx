'use client';

import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import QueryProvider from './query-provider';

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryProvider>
      {children}

      <Toaster
        position="top-right"
        richColors
      />
    </QueryProvider>
  );
}