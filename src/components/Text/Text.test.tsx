import { render, screen } from "@testing-library/react";
import Text from "./Text";

// grouping tests together using describe
describe("Component Tests", () => {
  test("Component Renders Correctly", () => {
    render(<Text text="Hello" />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", { name: "Name" });
    expect(inputElement).toBeInTheDocument();

    const inputElement2 = screen.getByLabelText("Name");
    expect(inputElement2).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const textArea = screen.getByRole("textbox", { name: "Info" });
    expect(textArea).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
