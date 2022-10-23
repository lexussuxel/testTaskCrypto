import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import axios from "axios";
const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;


export const appRouter = router({
    getData: publicProcedure
        .input((z.object({
            search: z.union([z.string() , z.undefined()]),
            limit: z.union([z.number(), z.undefined()]),
            offset: z.union([z.number(), z.undefined()]),
            ids: z.union([z.array(z.string()), z.undefined()])
        }) || z.undefined()))
        .query(async ({input})=>{
            return await axios.get('https://api.coincap.io/v2/assets', {params: input})
               .then((res)=>{return res.data})
        }),
    getChartData: publicProcedure
        .input((
            z.object({
                id: z.string(),
                interval: z.string()
            })))
        .query(async ({input})=>{
            return axios.get(`https://api.coincap.io/v2/assets/${input.id}/history`, {params: {interval: input.interval}})
                .then((res)=>{return res.data})
        })


});

export type AppRouter = typeof appRouter;