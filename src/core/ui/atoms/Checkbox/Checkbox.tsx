import { forwardRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  text: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Cambiado
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, text, checked, onChange, ...props }, ref) => {
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
          className={props.className}
        />
        <label
          htmlFor={id}
          className={`ml-2 text-gray-900 w-full ${
            checked ? "line-through text-gray-500" : ""
          }`}
        >
          {text}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
