import Link from 'next/link';
import {
  Target,
  Users,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Built for productivity',
    description:
      'DevHQ helps teams focus on meaningful work instead of managing complicated tools.',
  },
  {
    icon: Users,
    title: 'Team-first',
    description:
      'Projects, tasks, members, and responsibilities stay organized in one shared workspace.',
  },
  {
    icon: Zap,
    title: 'Simple and fast',
    description:
      'We believe powerful software does not have to be difficult to use.',
  },
  {
    icon: ShieldCheck,
    title: 'Designed to scale',
    description:
      'DevHQ is built with a flexible architecture that can grow with teams and projects.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <span className="inline-flex rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">
            About DevHQ
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Work better.
            <br />
            <span className="text-primary">Together.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            DevHQ is a modern project and team management platform designed
            to help individuals and teams organize their work, collaborate
            effectively, and move projects forward.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our mission
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Make project management simple for everyone.
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground">
            <p className="leading-7">
              Modern teams use dozens of tools to communicate, plan projects,
              manage tasks, and track progress. DevHQ aims to bring those
              essential workflows into one focused workspace.
            </p>

            <p className="leading-7">
              Whether you are working alone, building a startup, or managing
              a growing team, DevHQ gives you the tools to stay organized
              without unnecessary complexity.
            </p>

            <p className="leading-7">
              And because DevHQ is currently free to use, teams can get
              started without worrying about subscription costs.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What we believe
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around simple principles
            </h2>

            <p className="mt-4 text-muted-foreground">
              Every part of DevHQ is guided by a few principles that keep
              the product focused and useful.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border bg-card p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build something great with DevHQ.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Create your free workspace and start organizing your projects
            and team today.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}