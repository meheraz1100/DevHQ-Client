import {
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      helperText,
      type,
      className = '',
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] =
      useState(false);

    const isPassword = type === 'password';

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            {...props}
            type={
              isPassword
                ? showPassword
                  ? 'text'
                  : 'password'
                : type
            }
            className={`w-full rounded-lg border px-4 py-2 pr-11 outline-none transition
            ${
              error
                ? 'border-red-500'
                : 'focus:border-blue-500'
            }
            ${className}`}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          )}
        </div>

        {helperText && !error && (
          <p className="text-xs text-gray-500">
            {helperText}
          </p>
        )}

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;