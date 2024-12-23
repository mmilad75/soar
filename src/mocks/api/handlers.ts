import { http, HttpResponse } from 'msw';
import { cards } from './data/cards';
import { transactions } from './data/transactions';

export const handlers = [
  http.get('https://soar-api/credit-cards', ({ request }) => {
    const params = new URL(request.url).searchParams;
    const start = Number(params.get('start'));
    const limit = Number(params.get('limit'));

    return HttpResponse.json(
      {
        data: cards.slice(start, start + limit),
        meta: {
          total: cards.length,
        },
      },
      {
        status: 200,
      }
    );
  }),
  http.get('https://soar-api/transactions', ({ request }) => {
    const params = new URL(request.url).searchParams;
    const start = Number(params.get('start'));
    const limit = Number(params.get('limit'));

    return HttpResponse.json(
      {
        data: transactions.slice(start, start + limit),
        meta: {
          total: cards.length,
        },
      },
      {
        status: 200,
      }
    );
  }),
];
