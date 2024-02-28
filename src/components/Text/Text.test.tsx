import { render, screen } from "@testing-library/react";
import Text from "./Text";

test("Text Renders Correctly", () => {
  render(<Text text="Hello" />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
