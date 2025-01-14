import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  text: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameLabel?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, text, checked, onChange, classNameLabel = "", ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked} // Controlado
          onChange={onChange} // Handler asociado
          data-testid="checkbox"
        />
        <label
          htmlFor={id}
          className={twMerge(
            `ml-2 text-gray-900 w-full ${
              checked ? "line-through text-gray-500" : ""
            } ${classNameLabel}`
          )}
        >
          {text}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
