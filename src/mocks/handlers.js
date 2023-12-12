import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:7000/getbooks', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          authors: 'Harper Lee',
          categories: 'Fiction',
          pageCount: 336,
          shortDescription: 'A classic novel exploring racial injustice and moral growth in the American South.',
          thumbnailUrl: 'https://m.media-amazon.com/images/I/51o7pRTwVnL._AC_UF1000,1000_QL80_.jpg',
        },
      ])
    );
  }),
  // Add more 
];


