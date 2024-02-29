import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Text from "./Text";
import e from "express";

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
  });

  test("Button is displayed", async () => {
    render(<Text text="Hello" />);
    const openButton = await screen.findByText("Open");
    expect(openButton).toBeInTheDocument();
    act(() => {
      openButton.click();
    });
    const buttonElement = await screen.findByRole("button", {
      name: "Button",
    });
    expect(buttonElement).toBeInTheDocument();
    const openButton2 = screen.queryByText("Open");
    expect(openButton2).not.toBeInTheDocument();
  });
});
