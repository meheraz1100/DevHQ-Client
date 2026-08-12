'use client';

import {
  ArrowRight,
  CheckCircle2,
  FolderPlus,
  Rocket,
  Users,
} from 'lucide-react';

import { Reveal } from '@/src/components/animations/reveal';

const steps = [
  {
    number: '01',
    icon: FolderPlus,
    title: 'Create a workspace',
    description:
      'Create your team and organize everything inside a dedicated workspace.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Bring your team',
    description:
      'Invite members, assign roles, and build a workspace around your team.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Plan & execute',
    description:
      'Create projects, break work into tasks, assign owners, and track progress.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Ship the work',
    description:
      'Move tasks through your workflow and turn ideas into completed projects.',
  },
];

export default function WorkflowSection() {
  return (
    <section className="border-b bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Simple workflow
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to shipped
            </h2>

            <p className="mt-5 text-muted-foreground">
              A simple workflow that keeps your team focused on
              the work that actually matters.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.number}
                  delay={index * 0.12}
                >
                  <div className="relative text-center">

                    {/* Icon */}
                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Number */}
                    <p className="mt-5 text-xs font-semibold tracking-widest text-primary">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="absolute -right-5 top-6 hidden h-5 w-5 text-muted-foreground/50 lg:block" />
                    )}

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}