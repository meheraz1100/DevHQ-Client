'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }
        suppressHydrationWarning
      >
        {resolvedTheme === 'dark' ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )}
      </Button>
    </header>
  );
}