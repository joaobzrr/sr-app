import { useState } from "react";
import { ipcLink } from "electron-trpc/renderer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./trpc";

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity
          }
        }
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [ipcLink()]
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex h-full">
          Hello, World
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
