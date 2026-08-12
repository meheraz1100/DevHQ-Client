'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Reveal } from '@/src/components/animations/reveal';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <Reveal>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to build something great?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Bring your projects, tasks, and team together in one
            simple workspace. Start building with DevHQ today.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Get Started Free

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 text-xs text-muted-foreground">
            Free to get started · No credit card required
          </p>
        </Reveal>
      </div>
    </section>
  );
}