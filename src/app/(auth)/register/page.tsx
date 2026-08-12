"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Button from "@/src/components/forms/button";
import Input from "@/src/components/forms/input";

import { authService } from "@/src/services/auth.service";
import {
  RegisterSchema,
  registerSchema,
} from "@/src/validators/auth.validator";

import { useMemo } from "react";

const benefits = [
  "Create and manage unlimited projects",
  "Organize tasks with a powerful Kanban workflow",
  "Collaborate with your team in one workspace",
];

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const username = watch("username") ?? "";
  const password = watch("password") ?? "";
  const confirmPassword = watch("confirmPassword") ?? "";

  const passwordChecks = useMemo(
    () => ({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }),
    [password],
  );

  const usernameHasSpace = /\s/.test(username);
  const usernameValid = /^[a-zA-Z0-9._]+$/.test(username);

  const passwordsMatch =
    password.length > 0 && password === confirmPassword;

  const onSubmit = async (values: RegisterSchema) => {
    try {
      const { confirmPassword, ...payload } = values;

      await authService.register(payload);

      toast.success("Registration successful");

      router.push("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ?? "Registration failed",
      );
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 -top-45 h-105 w-105 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-50 -left-25 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Back to home */}
      <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Left — Register form */}
        <section className="flex items-center justify-center px-5 py-24 sm:px-8 lg:px-16">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 flex justify-center lg:hidden">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                  D
                </div>

                <span className="text-xl font-bold tracking-tight">
                  DevHQ
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border bg-background/80 p-6 shadow-sm backdrop-blur sm:p-8">

              {/* Heading */}
              <div className="mb-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Start building today
                </div>

                <h1 className="text-2xl font-bold tracking-tight">
                  Create your account
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Set up your DevHQ workspace and start managing
                  your projects with your team.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <Input
                  label="Name"
                  placeholder="Your full name"
                  {...register("name")}
                  error={errors.name?.message}
                />

                {/* Username */}
                <div className="space-y-2">
                  <Input
                    label="Username"
                    placeholder="meheraz_01"
                    helperText="Only letters, numbers, . and _ are allowed."
                    {...register("username")}
                    error={errors.username?.message}
                  />

                  {usernameHasSpace && (
                    <p className="text-xs text-red-500">
                      Username cannot contain spaces.
                    </p>
                  )}

                  {!usernameHasSpace &&
                    username.length > 0 &&
                    usernameValid && (
                      <p className="text-xs text-green-600">
                        ✓ Username looks good.
                      </p>
                    )}
                </div>

                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  error={errors.email?.message}
                />

                {/* Password */}
                <div className="space-y-3">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Create a strong password"
                    helperText="Use at least 8 characters."
                    {...register("password")}
                    error={errors.password?.message}
                  />

                  <div className="rounded-xl border bg-muted/30 p-4">
                    <p className="mb-3 text-xs font-semibold">
                      Password requirements
                    </p>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <PasswordCheck
                        valid={passwordChecks.length}
                        text="8+ characters"
                      />

                      <PasswordCheck
                        valid={passwordChecks.uppercase}
                        text="Uppercase letter"
                      />

                      <PasswordCheck
                        valid={passwordChecks.lowercase}
                        text="Lowercase letter"
                      />

                      <PasswordCheck
                        valid={passwordChecks.number}
                        text="One number"
                      />

                      <PasswordCheck
                        valid={passwordChecks.special}
                        text="Special character"
                      />
                    </div>
                  </div>
                </div>

                {/* Confirm password */}
                <div className="space-y-2">
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter your password"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                  />

                  {confirmPassword.length > 0 && (
                    <p
                      className={
                        passwordsMatch
                          ? "text-xs text-green-600"
                          : "text-xs text-red-500"
                      }
                    >
                      {passwordsMatch
                        ? "✓ Passwords match."
                        : "Passwords do not match."}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  loading={isSubmitting}
                  disabled={!isValid}
                >
                  <span className="flex items-center justify-center gap-2">
                    Create account

                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </span>
                </Button>
              </form>

              {/* Login */}
              <div className="mt-7 border-t pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By creating an account, you agree to DevHQ&apos;s
              terms and privacy policy.
            </p>
          </div>
        </section>

        {/* Right — Brand */}
        <section className="hidden items-center px-8 lg:flex lg:px-16">
          <div className="max-w-lg">

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                D
              </div>

              <span className="text-xl font-bold tracking-tight">
                DevHQ
              </span>
            </Link>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Your workspace starts here
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight xl:text-5xl">
                Turn ideas into
                <span className="text-primary"> shipped work.</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                DevHQ brings projects, tasks, teams, and workflows
                together so you can focus on building instead of
                managing chaos.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Small product statement */}
            <div className="mt-12 rounded-2xl border bg-background/60 p-5 backdrop-blur">
              <p className="text-sm font-medium">
                Built for modern teams.
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Simple enough to start quickly. Powerful enough to
                grow with your workflow.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function PasswordCheck({
  valid,
  text,
}: {
  valid: boolean;
  text: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-xs transition-colors ${
        valid ? "text-green-600" : "text-muted-foreground"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border text-[10px] ${
          valid
            ? "border-green-600 bg-green-600 text-white"
            : "border-muted-foreground/40"
        }`}
      >
        {valid ? "✓" : ""}
      </span>

      {text}
    </div>
  );
}