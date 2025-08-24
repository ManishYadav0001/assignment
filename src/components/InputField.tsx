import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";

}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:border-blue-500",
  outlined: "border border-gray-400 focus:border-blue-600",
  ghost: "bg-transparent border-b border-gray-400 focus:border-blue-600",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          value={value}
          onChange={onChange}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-md focus:outline-none
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${invalid ? "border-red-500" : ""}
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          `}
        />

        {/* Password toggle button */}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 text-sm text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {/* Helper/Error Text */}
      {invalid && errorMessage ? (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      ) : helperText ? (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      ) : null}
    </div>
  );
};