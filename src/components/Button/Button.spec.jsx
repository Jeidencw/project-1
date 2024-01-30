import React from 'react'

import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from '.'

describe('<Button />', () => {
    it('should render the button with the text  "Load More Posts"', () => {
        render(<Button text='Load More Posts' />)
        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more posts/i })
        expect(button).toBeInTheDocument()
    })

    it('should call function in button click', () => {
        const fn = jest.fn()

        render(<Button text='Load More Posts' onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more posts/i })
        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('shold be disebled when disabled is true', () => {
        render(<Button text='Load More Posts' disabled={true} />)

        const button = screen.getByRole('button', { name: /load more posts/i })
        expect(button).toBeDisabled()
    })

    it('shold be enebled when disabled is false', () => {
        render(<Button text='Load More Posts' disabled={false} />)

        const button = screen.getByRole('button', { name: /load more posts/i })
        expect(button).toBeEnabled()
    })

    it('shold match snapshot', () => {
        const fn = jest.fn()

        const { container } = render(<Button text='Load More Posts' disabled={false} onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more posts/i })

        expect(container.firstChild).toMatchSnapshot()
    })
})
