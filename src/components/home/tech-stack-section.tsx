'use client';

import {
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wind,
} from 'lucide-react';

import { Reveal } from '@/src/components/animations/reveal';

const technologies = [
  {
    name: 'Next.js',
    description: 'Full-stack React framework',
    icon: Layers3,
  },
  {
    name: 'TypeScript',
    description: 'Type-safe development',
    icon: Braces,
  },
  {
    name: 'Tailwind CSS',
    description: 'Modern UI styling',
    icon: Wind,
  },
  {
    name: 'Node.js',
    description: 'Backend runtime',
    icon: Server,
  },
  {
    name: 'Prisma',
    description: 'Type-safe database ORM',
    icon: Database,
  },
  {
    name: 'PostgreSQL',
    description: 'Reliable relational database',
    icon: GitBranch,
  },
];

export default function TechStackSection() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Under the hood
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built with modern technology
            </h2>

            <p className="mt-5 text-muted-foreground">
              DevHQ is built with a modern, scalable stack designed
              for performance, maintainability, and developer experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <Reveal
                key={technology.name}
                delay={index * 0.08}
              >
                <div className="group flex items-center gap-4 rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-muted/40 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {technology.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}