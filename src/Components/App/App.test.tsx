import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
// import { MemoryRouter } from 'react-router-dom'
import App from "./App"

describe('App', () => {
    it('should display the page title', () => {
        const { getByText } = render(<App />)

        expect(getByText('Flashcards')).toBeInTheDocument()
    })
})