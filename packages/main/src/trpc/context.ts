import { inferAsyncReturnType } from "@trpc/server";

export type TRPCContext = {
};

export async function createContext(): Promise<TRPCContext> {
  return {};
}

export type Context = inferAsyncReturnType<typeof createContext>;
