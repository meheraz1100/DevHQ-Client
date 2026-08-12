'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import Button from '@/src/components/forms/button';
import Input from '@/src/components/forms/input';

import { authService } from '@/src/services/auth.service';
import { useAuthStore } from '@/src/store/auth.store';

interface LoginForm {
  email: string;
  password: string;
}

const benefits = [
  'Manage projects and tasks in one place',
  'Collaborate with your team effortlessly',
  'Track progress with a simple workflow',
];

export default function LoginPage() {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (values: LoginForm) => {
    try {
      const res = await authService.login(values);

      login(res.data.user, res.data.accessToken);

      toast.success('Login successful');

      router.push('/dashboard');
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ?? 'Login failed',
      );
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-45 h-105 w-105 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-50 -right-25 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Back to home */}
      <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Left — Brand */}
        <section className="hidden items-center px-8 lg:flex lg:px-16">
          <div className="max-w-lg">

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                D
              </div>

              <span className="text-xl font-bold tracking-tight">
                DevHQ
              </span>
            </Link>

            <div className="mt-12">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Welcome back
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight xl:text-5xl">
                Get back to
                <span className="text-primary"> building.</span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                Continue managing your projects, tasks, and team
                from one simple workspace.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Right — Login */}
        <section className="flex items-center justify-center px-5 py-24 sm:px-8 lg:px-16">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 flex justify-center lg:hidden">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                  D
                </div>

                <span className="text-xl font-bold tracking-tight">
                  DevHQ
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border bg-background/80 p-6 shadow-sm backdrop-blur sm:p-8">

              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Sign in to continue to your DevHQ workspace.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  error={errors.email?.message}
                />

                <div>
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    error={errors.password?.message}
                  />

                  <div className="mt-2 flex justify-end">
                    
                  </div>
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                >
                  <span className="flex items-center justify-center gap-2">
                    Sign in
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </span>
                </Button>
              </form>

              {/* Register */}
              <div className="mt-7 border-t pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Do not have an account?{' '}
                  <Link
                    href="/register"
                    className="font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    Create one
                  </Link>
                </p>
              </div>

            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By continuing, you agree to DevHQ s terms and privacy policy.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}