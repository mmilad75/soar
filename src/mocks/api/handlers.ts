import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://soar-api/credit-cards', () => {
    return HttpResponse.json(
      {
        cards: [],
      },
      {
        status: 200,
      }
    );
  }),
];
