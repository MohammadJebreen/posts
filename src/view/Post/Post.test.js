import react from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "./Post.jsx";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import IdContext from "../../IdContext";

jest.mock("axios");
afterEach(cleanup);

describe("check post page render", () => {
  it("post page render !", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ userId: 2 }] })
    );
    const setData = jest.fn();
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <IdContext.Provider value={setData}>
          <Post data={{ id: 2 }} />
        </IdContext.Provider>
      </Router>
    );

    await waitFor(() => {
      const container = screen.getByTestId("post");
      expect(container).toBeTruthy();
    });
  });
});

describe("check button show comment work", () => {
  it("button work", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ userId: 2 }] })
    );
    const history = createMemoryHistory();
    const setData = jest.fn();
    render(
      <Router history={history}>
        <IdContext.Provider value={setData}>
          <Post data={{ id: 2 }} />
        </IdContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const element = screen.getByTestId("showComment");
      fireEvent.click(element);
      expect(element).toBeTruthy();
    });
  });
});

describe("check if title of post rendered", () => {
  it("post body render", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ userId: 2, title: "work" }] })
    );
    render(<Post data={{ id: 2 }} />);
    await waitFor(() => {
      const element = screen.getByTestId("title");
      expect(element).toHaveTextContent("work");
    });
  });
});

describe("check if body of post rendered", () => {
  it("post body render", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [{ userId: 2, title: "work", body: "this is a post" }],
      })
    );
    render(<Post data={{ id: 2 }} />);
    await waitFor(() => {
      const element = screen.getByTestId("body");
      expect(element).toHaveTextContent("this is a post");
    });
  });
});

describe("check comment path after click on show comment become /Comments", () => {
  it("header page render", async () => {
    axios.get.mockImplementation(() =>
    Promise.resolve({ data: [{ userId: 2 }] })
  );
  const setData = jest.fn();
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <IdContext.Provider value={setData}>
        <Post data={{ id: 2 }} />
      </IdContext.Provider>
    </Router>
  );
    await waitFor(() => {
      const button = screen.getByTestId("showComment");
      fireEvent.click(button);
      expect(history.location.pathname).toBe("/Comments");
    });
  });
});
