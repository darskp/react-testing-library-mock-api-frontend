import Booklist from './booklist';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { handlers } from '../testing/bookHandlers';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));


// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

function renderComponent() {
  render(
    <MemoryRouter>
      <Booklist />
    </MemoryRouter>
  );
}

test('fetching the data', async () => {
  renderComponent();
  await waitFor(() =>
    expect(screen.getByText(/To Kill a Mockingbird/i)).toBeInTheDocument()
  );
});

// test.only('renders correctly with an empty book list', async () => {
//   server.use(
//     rest.get('http://localhost:7000/getbooks', (req, res, ctx) => {
//       return res(ctx.json([]));
//     })
//   );

//   await act(async () => {
//     renderComponent();
//   });

//   await waitFor(() =>
//     expect(screen.getByText(/Book List \(0\)/i)).toBeInTheDocument()
//   );
// });
