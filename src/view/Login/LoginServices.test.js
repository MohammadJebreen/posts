import react from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login.jsx";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import EmailContext from "../../EmailContext";

jest.mock("axios");
afterEach(cleanup);

describe("check login page render", () => {
  it("login page render !", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ email: "mohammad@gmail.com" }] })
    );
    const history = createMemoryHistory();
    const setData = jest.fn();
    render(
      <Router history={history}>
        <EmailContext.Provider value={setData}>
          <Login />
        </EmailContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const text = screen.getByTestId("email");
      fireEvent.change(text, { target: { value: "mohammad@gmail.com" } });
      const element = screen.getByTestId("submitLogin");
      fireEvent.click(element);
      const container = screen.getByTestId("login");
      expect(container).toBeTruthy();
    });
  });
});

describe("check input email as one of emails allowed", () => {
  it("email allowed !" ,async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ email: "mohammad@gmail.com" }] })
    );
    const setData = jest.fn();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <EmailContext.Provider value={setData}>
          <Login />
        </EmailContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const element = screen.getByTestId("email");
      const email = "mohammad@gmail.com";
      fireEvent.change(element, { target: { value: email } });
      const elementButton = screen.getByTestId("submitLogin");
      fireEvent.click(elementButton);
      expect(element.value).toEqual(email);
    });
  });
});

describe("check post path after login", () => {
    it("the path become /post after login !", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: [{ email: "mohammad@gmail.com" }] })
      );
      const history = createMemoryHistory();
      const setData = jest.fn();
      render(
        <Router history={history}>
          <EmailContext.Provider value={setData}>
            <Login />
          </EmailContext.Provider>
        </Router>
      );
      await waitFor(() => {
        const element = screen.getByTestId("email");
        const email = "mohammad@gmail.com";
        fireEvent.change(element, { target: { value: email } });
        const elementButton = screen.getByTestId("submitLogin");
        fireEvent.click(elementButton);
        expect(history.location.pathname).toBe("/Post");
      });
    });
});
