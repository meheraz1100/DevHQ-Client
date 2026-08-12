'use client';

import {
  BarChart3,
  CheckCircle2,
  FolderKanban,
  GripVertical,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { Reveal } from '@/src/components/animations/reveal';

const features = [
  {
    icon: FolderKanban,
    title: 'Project Management',
    description:
      'Keep every project organized with clear structure, progress, and everything your team needs in one place.',
  },
  {
    icon: CheckCircle2,
    title: 'Smart Task Management',
    description:
      'Create tasks, set priorities, assign teammates, add due dates, and keep work moving.',
  },
  {
    icon: GripVertical,
    title: 'Kanban Workflow',
    description:
      'Move tasks between columns with an intuitive drag-and-drop workflow designed for speed.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Bring your team together with shared projects, members, assignments, and responsibilities.',
  },
  {
    icon: ShieldCheck,
    title: 'Roles & Permissions',
    description:
      'Keep your workspace organized with clear owner, admin, and member roles.',
  },
  {
    icon: BarChart3,
    title: 'Project Insights',
    description:
      'See project activity and task progress at a glance with useful dashboard statistics.',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Everything in one place
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built to keep your team moving
            </h2>

            <p className="mt-5 text-muted-foreground">
              DevHQ gives your team the essential tools to plan,
              collaborate, and deliver without unnecessary complexity.
            </p>
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.title}
                delay={index * 0.08}
              >
                <div className="group h-full rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border bg-muted/40 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}