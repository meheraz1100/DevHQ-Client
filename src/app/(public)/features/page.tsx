import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FolderKanban,
  GripVertical,
  Users,
  UserCheck,
  ShieldCheck,
  BarChart3,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: FolderKanban,
    title: 'Project Management',
    description:
      'Keep projects organized with clear structure, goals, and everything your team needs in one place.',
  },
  {
    icon: CheckCircle2,
    title: 'Task Management',
    description:
      'Create, assign, prioritize, and track tasks without losing sight of what matters.',
  },
  {
    icon: GripVertical,
    title: 'Kanban & Drag-and-Drop',
    description:
      'Move tasks between workflow stages with a simple and intuitive drag-and-drop board.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Bring your team together and keep everyone aligned around the same projects and tasks.',
  },
  {
    icon: UserCheck,
    title: 'Task Assignment',
    description:
      'Assign work to the right team member and make ownership clear across your projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Team Roles & Permissions',
    description:
      'Manage team access with clear roles for owners, admins, and members.',
  },
  {
    icon: BarChart3,
    title: 'Project Tracking',
    description:
      'Get a clear overview of project progress and understand what needs attention next.',
  },
  {
    icon: Zap,
    title: 'Simple & Fast Workflow',
    description:
      'A focused workspace designed to help your team spend less time managing tools and more time building.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Create your team',
    description:
      'Set up your workspace and invite the people you work with.',
  },
  {
    number: '02',
    title: 'Organize your projects',
    description:
      'Create projects, define your workflow, and break work into manageable tasks.',
  },
  {
    number: '03',
    title: 'Build and ship',
    description:
      'Track progress, collaborate with your team, and move work forward.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Powerful tools.
              <br />
              One simple workspace.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Everything developers and teams need to organize projects,
              manage tasks, collaborate, and get work shipped.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex h-11 items-center justify-center rounded-md border px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Everything you need
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for modern teams
            </h2>

            <p className="mt-4 text-muted-foreground">
              DevHQ keeps your projects, tasks, and team workflow connected
              without unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-background p-7 transition-colors hover:bg-muted/40"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border bg-background">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to shipped
            </h2>

            <p className="mt-4 text-muted-foreground">
              Start in minutes and keep your entire workflow organized.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-sm font-bold text-muted-foreground">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="rounded-2xl border px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to work smarter?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start using DevHQ today and bring your projects and team
              workflow into one simple workspace.
            </p>

            <div className="mt-8">
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}