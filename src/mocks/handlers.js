import {
  http,
  HttpResponse
} from 'msw'

export const handlers = [

  //get
  http.get('http://localhost:7000/getbooks', () => {

  //total : 2

    const booksData = [
      {
        id: 1,
        title: 'To Kill a Mockingbird_testing',
        authors: 'Harper Lee_testing',
        categories: 'Fiction_testing',
        pageCount: 336,
        shortDescription: 'A classic novel exploring racial injustice and moral growth in the American South._testing',
        thumbnailUrl: 'https://m.media-amazon.com/images/I/51o7pRTwVnL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        id: 2,
        title: 'The Great Gatsby_testing',
        authors: 'F. Scott Fitzgerald',
        categories: 'Classic Literature',
        pageCount: 131,
        shortDescription: 'A classic novel exploring racial injustice and moral growth in the American South._testing',
        thumbnailUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ptoyWH8dL._AC_UF1000,1000_QL80_.jpg',
      }
    ]
    return HttpResponse.json( booksData, { status: 200 })
  }),

  //single book
  http.get('http://localhost:7000/getbooks/:id', ({ params }) => {
    const { id } = params.id;

    const bookData = {
      id,
      title: 'The Great Gatsby_testing',
      authors: 'F. Scott Fitzgerald',
      categories: 'Classic Literature',
      pageCount: 131,
      shortDescription: 'A classic novel exploring racial injustice and moral growth in the American South._testing',
      thumbnailUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ptoyWH8dL._AC_UF1000,1000_QL80_.jpg',
    }

    return HttpResponse.json(bookData, { status: 200 })
  }),


  //post
  http.post('http://localhost:7000/addbook/', async ({
    request
  }) => {
    const requestBody = await request.json();
    // const authToken = request.headers.get("Authorization");
    const authToken = 'aw1234kpll23'

    if (!authToken) return HttpResponse.json({
      message: 'Not Authorized'
    }, {
      status: 401
    })

    if (!requestBody.title || !requestBody.authors) {
      return HttpResponse.json({
        error: 'Title and authors are required fields'
      }, {
        status: 400
      });
    }

    const headerOptions = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": authToken,
    };

    const responseData = {
      message: "Testing: Book added successfully",
      data: {
        authors: requestBody.authors,
        title: requestBody.title,
        categories: requestBody.categories,
        pageCount: requestBody.pageCount,
        shortDescription: requestBody.shortDescription,
        thumbnailUrl: requestBody.thumbnailUrl,
        createdAt: new Date().toLocaleString(),
      },
    };
    return HttpResponse.json(responseData, {
      status: 200,
      headers: headerOptions
    });
  }),



  //put
  http.put('http://localhost:7000/updatebook/:id', async ({
    request, params
  }) => {
    const { id } = params;
    const requestBody = await request.json();
    // const authToken = request.headers.get("Authorization");
    const authToken = 'aw1kll23';

    if (!authToken) return HttpResponse.json({
      error: 'Not Authorized'
    }, {
      status: 401
    })

    const headerOptions = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": authToken,
    };

    const responseData = {
      message: "Testing: Book has been updated successfully",
      data: {
        id: Number(id),
        authors: requestBody.authors,
        title: requestBody.title,
        categories: requestBody.categories,
        pageCount: requestBody.pageCount,
        shortDescription: requestBody.shortDescription,
        thumbnailUrl: requestBody.thumbnailUrl,
        updatedAt: new Date().toLocaleString(),
      },
    };
    return HttpResponse.json(responseData, {
      status: 200,
      headers: headerOptions
    });

  }),


  http.delete('http://localhost:7000/removebook/:id', ({ params }) => {
    const { id } = params;

    if (id === '3') {
      const eResponse = {
        error: "Failed to delete book",
        id: 3,
      };
      return HttpResponse.json(eResponse, { status: 500 });
    }

    const response = {
      message: "Testing: Book has been deleted successfully",
      id: Number(id),
    };

    return HttpResponse.json(response, { status: 200 });

  })



]