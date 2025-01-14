import { ButtonType } from "@/core/types/buttonType";
import { ButtonHTMLAttributes, forwardRef, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  typeButton?: ButtonType;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | React.ReactNode[];
  loading?: boolean;
}

const classByType: Record<ButtonType, string> = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  outline: "border border-gray-300 hover:bg-gray-300 text-gray-900",
  danger: "bg-red-500 hover:bg-red-700 text-white",
  link: "text-blue-500 hover:text-blue-700 text-sm",
  ghost: "text-gray-900 hover:text-gray-700 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type, typeButton = "primary", children, loading = false, ...props },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={twMerge(
          classByType[typeButton],
          "px-4 py-2 rounded-md items-center",
          props.className
        )}
        type={type || "button"}
        onClick={props.onClick}
        disabled={loading}
      >
        {loading && (
          <div className="w-full flex items-center justify-center">
            <LoadingSpinner size={20} />
          </div>
        )}
        {!loading && children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
