import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to start managing your work.',
    features: [
      'Unlimited personal tasks',
      'Up to 3 teams',
      'Basic project management',
      'Kanban board',
      'Task assignments',
      'Dashboard statistics',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'Advanced collaboration for growing teams.',
    features: [
      'Everything in Free',
      'Unlimited teams',
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'More collaboration tools',
    ],
    popular: true,
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <span className="inline-flex rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">
            Simple pricing
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Start free. Upgrade when you need.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            DevHQ is built to give teams powerful project management tools
            without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section>
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:py-28">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-card p-8 ${
                plan.popular
                  ? 'border-primary shadow-lg'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold">
                {plan.name}
              </h2>

              <p className="mt-3 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-1">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="mb-1 text-muted-foreground">
                  /month
                </span>
              </div>

              <Link
                href="/register"
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-md px-5 text-sm font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border bg-background hover:bg-muted'
                }`}
              >
                {plan.name === 'Free'
                  ? 'Get Started Free'
                  : 'Start Pro'}
              </Link>

              <div className="mt-8 border-t pt-6">
                <p className="mb-4 text-sm font-semibold">
                  What is included
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold">
            No credit card required.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Create your DevHQ workspace and start managing your
            projects today.
          </p>

          <Link
            href="/register"
            className="mt-7 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  );
}