import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const characterRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `✨ Hello ${input.name} ✨`,
      };
    }),
  count: publicProcedure.query(async ({ ctx }) => {
    const count = await ctx.prisma.character.count();
    return count;
  }),
  getCharacter: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      // Implement the getCharacter procedure in src/server/api/routers/character.ts so that the procedure returns a character given the character's id
      // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique
      const character = await ctx.prisma.character.findUnique({
        where: { id: input.id },
      });
      return character;
    }),
  getAllCharacters: publicProcedure.query(async ({ ctx }) => {
    const allCharacters = await ctx.prisma.character.findMany();
    return allCharacters;
  }),
});
