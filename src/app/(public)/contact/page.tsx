'use client';

import { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <span className="inline-flex rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">
            Contact us
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets talk.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Have a question, suggestion, or feedback about DevHQ?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Whether you found a bug, have an idea for a new feature,
              or simply want to say hello, send us a message.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    support@devhq.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">
                    Feedback
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Help us make DevHQ better.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border bg-card p-6 sm:p-8">

            {submitted ? (
              <div className="flex min-h-87.5 flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  Message received!
                </h2>

                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks for reaching out. We will get back to you
                  as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}