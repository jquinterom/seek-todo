import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormInputTask from "./FormInputTask";
import userEvent from "@testing-library/user-event";

describe("FormInputTask Component", () => {
  it("should render the FormInputTask component", () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();
    const text = "Hello world!";
    render(
      <FormInputTask onSubmit={onSubmit} text={text} onChange={onChange} />
    );

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("value", text);
  });

  it("should render the FormInputTask component with Change event", async () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();
    const text = "Hello world!";

    const user = userEvent.setup();

    const { getByTestId } = render(
      <FormInputTask onSubmit={onSubmit} text={text} onChange={onChange} />
    );

    const input = getByTestId("input");
    await user.type(input, "newText");

    expect(onChange).toHaveBeenCalled();
  });

  it("should render the FormInputTask component clicking on the button", async () => {
    const onSubmit = jest.fn((event) => event.preventDefault());
    const onChange = jest.fn();
    const text = "Hello world!";

    const newText = "newText";

    render(
      <FormInputTask onSubmit={onSubmit} text={text} onChange={onChange} />
    );

    const button = screen.getByRole("button");
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveValue(text);

    await userEvent.type(input, newText);
    expect(onChange).toHaveBeenCalledTimes(newText.length);

    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalled();
  });
});
