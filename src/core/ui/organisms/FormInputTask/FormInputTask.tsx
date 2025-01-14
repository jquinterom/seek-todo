import Button from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

interface FormInputTaskProps {
  onSubmit: (event: React.FormEvent) => void;
  text: string;
  onChange: (newTask: string) => void;
}

const FormInputTask = ({ onSubmit, text, onChange }: FormInputTaskProps) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex space-x-2">
        <Input
          value={text}
          onChange={(element) => onChange(element.target.value)}
        />
        <Button type="submit"> Save </Button>
      </div>
    </form>
  );
};

export default FormInputTask;
