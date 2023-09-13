import { rest } from 'msw'
import { fakeCita } from './fakeCita';
import { API_URL } from "../../app/constants";

// export const handlers = [
//   rest.get(API_URL, (req, res, ctx) => {
//       const character = req.url.searchParams.get('character');

//       if(!character){
//           return res(ctx.json([fakeCita]), ctx.delay(150));
//       }

//       return res(ctx.json([]), ctx.delay(150));
//   }),
// ];

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
      const characterQuery = req.url.searchParams.get('character');

      let foundCharacter;

      // Check if characterQuery is not null before using it
      if (characterQuery) {
          // Search for the character in the fakeCita array
          foundCharacter = fakeCita.find(cita => cita.character.toLowerCase().includes(characterQuery.toLowerCase()));
      }

      // If character is found in the array, return it
      if (foundCharacter) {
          return res(ctx.json([foundCharacter]), ctx.delay(150));
      } 

      // If no character is provided in the query parameters or character is not found, return a default quote
      if (!characterQuery || !foundCharacter) {
          return res(ctx.json([fakeCita[0]]), ctx.delay(150));
      }

      // If character is not found, return empty array
      return res(ctx.json([]), ctx.delay(150));
  }),
];

