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
});
