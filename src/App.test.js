import react from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("check if App page render", () => {
  it("App page render !", () => {
      render(<App />);
      const container = screen.getByTestId("app");
      expect(container).toBeTruthy();
  });
});
