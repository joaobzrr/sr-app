import { initTRPC } from "@trpc/server";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();
export const createRouter = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
