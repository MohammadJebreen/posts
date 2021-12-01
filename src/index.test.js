import React from "react"
import ReactDOM from "react-dom"

jest.mock("react-dom", () => ({ render: jest.fn() }))

test("renders index", () => {

  require("./index.js")

  expect(ReactDOM.render).toBeTruthy()

})
