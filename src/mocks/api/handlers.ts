import { http, HttpResponse } from 'msw';
import { cards } from './data/cards';
import { transactions } from './data/transactions';
import { balanceHistory, expenseStatistics, weeklyActivity } from './data/reports';
import { frequentContacts } from './data/contacts';

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
          total: transactions.length,
        },
      },
      {
        status: 200,
      }
    );
  }), //
  http.get('https://soar-api/reports/weekly-activity', () => {
    return HttpResponse.json(
      {
        data: weeklyActivity,
      },
      {
        status: 200,
      }
    );
  }),
  http.get('https://soar-api/reports/expense-statistics', () => {
    return HttpResponse.json(
      {
        data: expenseStatistics,
      },
      {
        status: 200,
      }
    );
  }),
  http.get('https://soar-api/reports/balance-history', () => {
    return HttpResponse.json(
      {
        data: balanceHistory,
      },
      {
        status: 200,
      }
    );
  }),
  http.get('https://soar-api/contacts/frequent', () => {
    return HttpResponse.json(
      {
        contacts: frequentContacts,
      },
      {
        status: 200,
      }
    );
  }),
];
