import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
render(<Input name="My new Game"/>);

const input = screen.getByRole("textbox",  { name: "My new Game" });
expect(input).toBeInTheDocument();
});

test("calls callback on every user input", async () => {});
