import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Text from "./Text";
import React from "react";

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
    user.click(openButton);
    const buttonElement = await screen.findByRole("button", {
      name: "Button",
    });
    expect(buttonElement).toBeInTheDocument();
    const openButton2 = screen.queryByText("Open");
    expect(openButton2).not.toBeInTheDocument();
  });
});

// use wrappers while render to provide providers and context
// render hook is used to test hooks
// jest.fn is used to mock functions
// jest.mock is used to mock modules
// jest.spyOn is used to spy on functions

// Mocking Http Requests
// will look into it later
