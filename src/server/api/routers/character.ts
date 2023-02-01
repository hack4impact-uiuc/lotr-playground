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
  getAll: publicProcedure.query(async ({ ctx }) => {
    const characters = await ctx.prisma.character.findMany();
    return characters;
  }),
});
