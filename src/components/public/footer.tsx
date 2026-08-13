import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

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

        <div className="grid gap-10 md:grid-cols-5">

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

          {/* Developer */}
          <div>
            <h3 className="text-sm font-semibold">
              Developed by
            </h3>

            <div className="mt-4 space-y-3">

              <div>
                <p className="font-semibold">
                  MD Mosaiyeb Islam Meheraz
                </p>

                <p className="text-sm text-muted-foreground">
                  Full Stack Web Developer
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Feni, Bangladesh</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">

                <a
                  href="https://github.com/meheraz1100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dev-mosaiyebmeheraz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaLinkedin size={24} color="#0A66C2" />
                </a>

                <a
                  href="mailto:mosaiyebmeheraz@gmail.com"
                  aria-label="Email"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </a>

                <a
                  href="https://mosaiyeb-meheraz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} DevHQ. All rights reserved.
          </p>

          <p>
            Built with ❤️ by{' '}
            <a
              href="https://mosaiyeb-meheraz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              Meheraz
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}