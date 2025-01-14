import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

describe("Card Component", () => {
  it("should render the Card component", () => {
    const title = "Hello world!";
    const { getByText } = render(<Card>{title}</Card>);
    expect(getByText(title)).toBeInTheDocument();
  });

  it("should render the Card component with children", () => {
    const cardContent = "Content";
    const { getByText } = render(<Card>{cardContent}</Card>);
    expect(getByText(cardContent)).toBeInTheDocument();
  });

  it("should render the CardHeader component", () => {
    const header = "Header";
    const { getByText } = render(<CardHeader>{header}</CardHeader>);
    expect(getByText(header)).toBeInTheDocument();
  });

  it("should render the CardTitle component", () => {
    const title = "Title";
    const { getByText } = render(<CardTitle>{title}</CardTitle>);
    expect(getByText(title)).toBeInTheDocument();
  });

  it("should render the CardDescription component", () => {
    const description = "This is a description";
    const { getByText } = render(
      <CardDescription>{description}</CardDescription>
    );
    expect(getByText(description)).toBeInTheDocument();
  });

  it("should render the CardContent component", () => {
    const content = "This is a content";
    const { getByText } = render(<CardContent>{content}</CardContent>);
    expect(getByText(content)).toBeInTheDocument();
  });

  it("should render the CardFooter component", () => {
    const footer = "This is a footer";
    const { getByText } = render(<CardFooter>{footer}</CardFooter>);
    expect(getByText(footer)).toBeInTheDocument();
  });
});
