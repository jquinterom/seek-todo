import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Input } from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value: string;
}

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, id }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          ref={ref}
          className={"w-full"}
          placeholder="Your password"
        />

        <Button
          type="button"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          typeButton="ghost"
        >
          {showPassword ? (
            <FiEyeOff className="h-4 w-4" />
          ) : (
            <BsEye className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";
