import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginTemplate from "./LoginTemplate";
import userEvent from "@testing-library/user-event";

const handleSubmit = jest.fn((event) => event.preventDefault());
const setEmail = jest.fn();
const setPassword = jest.fn();

describe("LoginTemplate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <LoginTemplate
        loading={true}
        email=""
        password=""
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    );
  });

  it("should render the LoginTemplate component", () => {
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();

    const email = screen.getByPlaceholderText("john.doe@example.com");
    expect(email).toBeInTheDocument();

    const password = screen.getAllByTestId("input")[1];
    expect(password).toBeInTheDocument();
  });

  it("should render the LoginTemplate component with Change event", async () => {
    const user = userEvent.setup();

    const email = screen.getByPlaceholderText("john.doe@example.com");
    const password = screen.getAllByTestId("input")[1];

    await user.type(email, "john.doe@example.com");
    await user.type(password, "password");

    expect(setEmail).toHaveBeenCalled();
    expect(setPassword).toHaveBeenCalled();
  });
});
