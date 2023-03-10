import { router, publicProcedure, protectedForAdmin } from '../trpc';
import z from 'zod'
export const routerNews = router({
    createNew: protectedForAdmin
    .input(z.object({
        title: z.string(),
        content: z.string(),
        links: z.array(z.string())
    }))
    .mutation( async ({input, ctx}) => {
        
        const {content,links,title} = input;
        const createdNew = await ctx.prisma
        return
    })
})