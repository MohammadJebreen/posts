import react from 'react';
import {render  , screen  , waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Comment from "./Comment.jsx"
import axios from "axios";

jest.mock("axios");

describe('test comment page', () => {
    it('check if comment page render', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: [{"id":1,"name":"mohammad","body":"this is a comment", "email" : "mohammad@gmail.com"}] }));
        render(
            <Comment data = {{data : 1}} />
        )
        await waitFor (()=>{
            const element = screen.getByTestId('comments')
            expect(element).toBeTruthy();
        })
    })
})

describe('check if name of comment rendered', () => {
    it('check if name of comment rendered', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: [{"id":1,"name":"mohammad","body":"this is a comment", "email" : "mohammad@gmail.com"}] }));
        render(
            <Comment data = {{data : 1}} />
        )
        await waitFor (()=>{
            const element = screen.getByTestId('name')
            expect(element).toHaveTextContent('name : mohammad');
        })
    })
})

describe('check if email of comment rendered', () => {
    it('check if email of comment rendered', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: [{"id":1,"name":"mohammad","body":"this is a comment", "email" : "mohammad@gmail.com"}] }));
        render(
            <Comment data = {{data : 1}} />
        )
        await waitFor (()=>{
            const element = screen.getByTestId('email')
            expect(element).toHaveTextContent('email : mohammad@gmail.com');
        })
    })
})

describe('check if body of comment rendered', () => {
    it('check if body of comment rendered', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: [{"id":1,"name":"mohammad","body":"this is a comment", "email" : "mohammad@gmail.com"}] }));
        render(
            <Comment data = {{data : 1}} />
        )
        await waitFor (()=>{
            const element = screen.getByTestId('body')
            expect(element).toHaveTextContent('comment : this is a comment');
        })
    })
})
