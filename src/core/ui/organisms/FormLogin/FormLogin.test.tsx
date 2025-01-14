import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormLogin from "./FormLogin";
import userEvent from "@testing-library/user-event";

const handleSubmit = jest.fn((event) => event.preventDefault());
const setEmail = jest.fn();
const setPassword = jest.fn();

describe("FormLogin", () => {
  it("should render the FormLogin component", async () => {
    const user = userEvent.setup();

    render(
      <FormLogin
        handleSubmit={handleSubmit}
        email=""
        loading
        password=""
        setEmail={setEmail}
        setPassword={setPassword}
      />
    );
    const form = screen.getByTestId("form-login");
    expect(form).toBeInTheDocument();

    const email = screen.getByPlaceholderText("john.doe@example.com");
    expect(email).toBeInTheDocument();

    const password = screen.getAllByTestId("input")[1];
    expect(password).toBeInTheDocument();

    await user.type(email, "john.doe@example.com");
    await user.type(password, "password");

    expect(setEmail).toHaveBeenCalled();
    expect(setPassword).toHaveBeenCalled();
  });
});
