import Button from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { InputPassword } from "../../molecules/InputPassword/InputPassword";

interface FormLoginProps {
  handleSubmit: (event: React.FormEvent) => void;
  loading: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const FormLogin = ({
  handleSubmit,
  loading,
  email,
  password,
  setEmail,
  setPassword,
}: FormLoginProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-testid="form-login"
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(element) => setEmail(element.target.value)}
          required
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <InputPassword
          id="password"
          type="password"
          value={password}
          onChange={(element) => setPassword(element.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" loading={loading}>
        Sign In
      </Button>
    </form>
  );
};

export default FormLogin;
