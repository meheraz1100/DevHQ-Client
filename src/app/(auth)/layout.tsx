import { ReactNode } from 'react';

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-muted/30 min-h-screen">
      {children}
    </div>
  );
}