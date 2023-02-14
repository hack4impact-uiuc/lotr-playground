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
  getCharacters: publicProcedure.query(async ({ ctx }) => {
    const characters = await ctx.prisma.character.findMany();
    return characters;
  }),
  searchCharacters: publicProcedure
    .input(z.object({ searchInput: z.string() }))
    .query(async ({ ctx, input }) => {
      const searchInput = `%${input.searchInput}%`;
      const characters = await ctx.prisma
        .$queryRaw`SELECT * FROM "Character" WHERE name LIKE ${searchInput}`;
      return characters;
    }),
});
