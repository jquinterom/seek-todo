import { forwardRef } from "react";

interface CheckboxProps {
  id: string;
  text: string;
  checked: boolean;
  onChange?: () => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, text, checked, onChange }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`flex-grow text-gray-900 ${
            checked ? "line-through text-gray-500" : ""
          }`}
        >
          {text}
        </label>
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
