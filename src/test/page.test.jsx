import {render, screen, fireEvent} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Page from "@/app/page"


describe("Main Page", () => {
  beforeEach(() => {
  })
  
  test("should display '40'", async () => {
    const events = userEvent.setup()
    render(<Page />)

    const numberInput = screen.getByLabelText("Your number:")
    const numberOutput = screen.getByLabelText("Your number is:")
    const submitButton = screen.getByRole("button")

    const expectedValue = "40"

    // As far as I can tell, userEvent doesn't support changing
    // input text, so we have to use fireEvent for this.
    // (UserEvent is recommended for integration testing, as
    // it will fire all the events associated with an interaction
    // as opposed to just the one specified, however, for unit
    // tests, fireEvent should be just fine.)
    fireEvent.change(numberInput, {target: {value: expectedValue}})
    await events.click(submitButton)
    render(<Page />)

    expect(numberOutput.value).toBe(expectedValue)
  })
})
