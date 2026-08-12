'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

import { useAuthStore } from '@/src/store/auth.store';
import { api } from '@/src/lib/axios';
import Image from 'next/image';

const navItems = [
    { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  

  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { user, accessToken, logout } = useAuthStore();

  const isLoggedIn = !!user && !!accessToken;

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout request failed:', error);
    } finally {
      logout();
      setAccountOpen(false);
      setOpen(false);
    }
  };

  const getInitials = () => {
    if (!user) return 'U';

    const name = user.name || user.username || 'User';

    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          DevHQ
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          {isLoggedIn ? (
            /* Account Menu */
            <div className="relative">

              <button
                type="button"
                onClick={() => setAccountOpen(!accountOpen)}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
              >
                {/* Avatar */}
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {getInitials()}
                  </div>
                )}

                {/* User name */}
                <div className="hidden text-left lg:block">
                  <p className="max-w-35 truncate text-sm font-medium">
                    {user.name || user.username}
                  </p>
                  <p className="max-w-35 truncate text-xs text-muted-foreground">
                    @{user.username}
                  </p>
                </div>

                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                    accountOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown */}
              {accountOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border bg-background shadow-lg">

                  {/* User info */}
                  <div className="border-b px-4 py-3">
                    <p className="truncate text-sm font-semibold">
                      {user.name}
                    </p>

                    <p className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  {/* Dashboard */}
                  <Link
                    href="/dashboard"
                    onClick={() => setAccountOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <span className="text-base">▦</span>
                    Dashboard
                  </Link>

                  {/* Profile */}
                  <Link
                    href="/profile"
                    onClick={() => setAccountOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>

                  {/* Settings */}
                  <Link
                    href="/settings"
                    onClick={() => setAccountOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>

                  {/* Logout */}
                  <div className="border-t">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            /* Logged Out */
            <>
              <Link
                href="/login"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Log in
              </Link>

              <Link
                href="/register"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 hover:bg-muted md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t pt-3">

              {isLoggedIn ? (
                <div className="space-y-1">

                  {/* User */}
                  <div className="mb-3 flex items-center gap-3 px-3">
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {getInitials()}
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {user.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        @{user.username}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-muted"
                  >
                    <span>▦</span>
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-muted"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>

                  <Link
                    href="/settings"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-muted"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>

                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 flex-1 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                  >
                    Log in
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started Free
                  </Link>
                </div>
              )}

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}