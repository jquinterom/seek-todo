import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  it("renders an input with a value", () => {
    render(<Input id="input" value="Hello, world!" onChange={() => {}} />);

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();

    const inputValue = input.getAttribute("value");
    expect(inputValue).toBe("Hello, world!");
  });

  it("renders an input with a placeholder", () => {
    render(
      <Input
        id="input"
        value="Hello, world!"
        placeholder="Placeholder"
        onChange={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const label = input.getAttribute("placeholder");
    expect(label).toBe("Placeholder");
  });

  it("renders an input with a type", () => {
    render(
      <Input
        id="input"
        value="Hello, world!"
        type="password"
        onChange={() => {}}
      />
    );

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders an input change event", () => {
    const onChange = jest.fn();
    render(<Input id="input" value="Hello, world!" onChange={onChange} />);

    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "New value" } });

    expect(onChange).toHaveBeenCalled();
  });

  it("renders an input change event with userEvent", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup(); // It's is better to use userEvent
    render(<Input id="input" value="Hello, world!" onChange={onChange} />);

    const input = screen.getByTestId("input");

    await user.type(input, "New value");

    expect(onChange).toHaveBeenCalled();
  });
});
