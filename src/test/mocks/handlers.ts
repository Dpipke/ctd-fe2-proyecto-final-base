import { rest } from 'msw'
import { fakeCita } from './fakeCita';
import { API_URL } from "../../app/constants";

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
      const character = req.url.searchParams.get('character');

      if(!character){
          return res(ctx.json([fakeCita]), ctx.delay(150));
      }

      return res(ctx.json([]), ctx.delay(150));
  }),
];
