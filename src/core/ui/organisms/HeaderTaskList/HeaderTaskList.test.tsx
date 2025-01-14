import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HeaderTaskList from "./HeaderTaskList";

describe("HeaderTaskList Component", () => {
  it("should render the HeaderTaskList component", () => {
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user",
    };

    const logout = jest.fn();
    const { getByText } = render(
      <HeaderTaskList user={user} logout={logout} />
    );

    expect(getByText("Welcome " + user.name)).toBeInTheDocument();
  });
});
