import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const LoadingSpinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 20, color = "border-gray-500", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={twMerge(
          "animate-spin rounded-full border-4 w-full h-full",
          color,
          props.className,
          "border-t-transparent"
        )}
        style={{
          width: size,
          height: size,
        }}
        role="progressbar"
      ></div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
