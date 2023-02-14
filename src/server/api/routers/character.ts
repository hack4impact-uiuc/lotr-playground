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
  createCharacter: publicProcedure.input(z.object({
    name: z.string(),
    gender: z.string(),
    race: z.string(),
    realm: z.string(),
    wikiUrl: z.string(),
    imageUrl: z.string(),
  })).mutation(async ({ ctx, input }) => {
    const character = await ctx.prisma.character.create({
      data: {
        name: input.name,  
        gender: input.gender, 
        race: input.race, 
        realm: input.realm,
        wikiUrl: input.wikiUrl,
        imageUrl: input.imageUrl,
      }
    });
    return character;
  }),
});
