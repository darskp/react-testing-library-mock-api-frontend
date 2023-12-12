import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Booklist from "./booklist"

jest.mock('axios');

function renderComponent() {
  render(
    <MemoryRouter>
      <Booklist />
    </MemoryRouter>
  )
}
describe("books", () => {

  test("renders correctly", () => {
    renderComponent()
    const ele = screen.getByText(/list/i);
    expect(ele).toBeInTheDocument()
  })

  test("renders a list of books", async () => {
    renderComponent()
    const books = await screen.findAllByTestId('bookcard');
    console.log(books)
    expect(books).toHaveLength(1);
  })
})