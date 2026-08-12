import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import { HeroReveal } from '@/src/components/animations/hero-reveal';
import DashboardPreview from '@/src/components/home/dashboard-preview';
import { Reveal } from '@/src/components/animations/reveal';
import FeatureShowcase from '@/src/components/home/feature-showcase';
import WorkflowSection from '@/src/components/home/workflow-section';
import TechStackSection from '@/src/components/home/tech-stack-section';
import FinalCTA from '@/src/components/home/final-cta';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-45 h-105 w-105 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <HeroReveal>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />

                <span>
                  A simple workspace for modern teams
                </span>
              </div>
            </HeroReveal>

            {/* Heading */}
            <HeroReveal delay={0.1}>
              <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Build.
                <span className="text-primary"> Organize.</span>
                <br />
                Ship.
              </h1>
            </HeroReveal>

            {/* Description */}
            <HeroReveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                DevHQ brings projects, tasks, teams, and collaboration
                together in one powerful workspace designed to help your
                team move from idea to execution faster.
              </p>
            </HeroReveal>

            {/* CTA */}
            <HeroReveal delay={0.3}>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/features"
                  className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-muted"
                >
                  Explore Features
                </Link>
              </div>
            </HeroReveal>

            {/* Trust points */}
            <HeroReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Free to use
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Built for teams
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  No credit card required
                </span>
              </div>
            </HeroReveal>

          </div>
        </div>
      </section>
      <section className="border-b bg-muted/20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Reveal delay={0.2} duration={0.7}>
      <DashboardPreview />
    </Reveal>
  </div>
</section>
      <FeatureShowcase />
      <WorkflowSection />
      <TechStackSection />
      <FinalCTA />
    </main>
  );
}