import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, id, ...props }, ref) => {
    const type = props.type ?? "text";

    return (
      <input
        {...props}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={props.placeholder}
        className={twMerge(
          "flex-grow text-gray-900 border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none",
          props.className
        )}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";
