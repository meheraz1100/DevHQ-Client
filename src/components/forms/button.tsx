import { ButtonHTMLAttributes } from 'react';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}