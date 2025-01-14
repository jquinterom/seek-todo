import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputPassword } from "./InputPassword";

describe("InputPassword Component", () => {
  it("should render the InputPassword component", () => {
    const value = "password";
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputPassword value={value} onChange={onChange} />
    );
    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("should render the InputPassword component with Change event", () => {
    const value = "password";
    const onChange = jest.fn();

    const { getByTestId } = render(
      <InputPassword value={value} onChange={onChange} />
    );

    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "newPassword" } });

    expect(onChange).toHaveBeenCalled();
  });

  it("should render the InputPassword component clicking on the button", () => {
    const value = "password";
    const onChange = jest.fn();

    render(<InputPassword value={value} onChange={onChange} />);

    const button = screen.getByRole("button");
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "password");
  });
});
