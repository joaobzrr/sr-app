import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@main/types";

export const trpc = createTRPCReact<AppRouter>();
