// import * as trpcExpress from "@trpc/server/adapters/express";
// import {inferAsyncReturnType, initTRPC} from "@trpc/server";
import * as trpc from '@trpc/server';
import { initTRPC } from '@trpc/server';
import * as z from "zod"
// export const createContext = ({
//                            req,
//                            res,
//                        }: trpcExpress.CreateExpressContextOptions) => ({}); // no context
// type Context = inferAsyncReturnType<typeof createContext>;
// const t = initTRPC.context<Context>().create();
const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure

export const appRouter = router({
    greeting: publicProcedure
        .input((name: any)=> name)
        .query((req) => {
            const { input } = req;


            return {
                text: `Hello ${input}` as const,
            };
        }),
});

export type AppRouter = typeof appRouter;