import Link from 'next/link';

const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const accountLinks = [
  { label: 'Log in', href: '/login' },
  { label: 'Get Started Free', href: '/register' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              DevHQ
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              A simple workspace for developers and teams to
              manage projects, tasks, and collaboration.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold">
              Account
            </h3>

            <ul className="mt-4 space-y-3">
              {accountLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevHQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}