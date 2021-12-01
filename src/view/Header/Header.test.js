import react from 'react';
import Header from './Header'
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";


describe('check Header page render', () => {
    test('header page render !',()=>{
        const {getByTestId} = render(<Header />)
        const element = getByTestId('header')
        expect(element).toBeTruthy()
    })
})

describe("check logout button change path to /", () => {
    it("logout button work !", async () => {
      const history = createMemoryHistory();
      render(
        <Router history ={history}>
            <Header />
        </Router>
      );
      await waitFor(() => {
        const button = screen.getByTestId('Logout')
        fireEvent.click(button);
        expect(history.location.pathname).toBe("/");
      });
    });
});

describe("check post button change path to /Post", () => {
    it("post button work !", async () => {
      const history = createMemoryHistory();
      render(
        <Router history ={history}>
            <Header />
        </Router>
      );
      await waitFor(() => {
        const button = screen.getByTestId('Post')
        fireEvent.click(button);
        expect(history.location.pathname).toBe("/Post");
      });
    });
});
