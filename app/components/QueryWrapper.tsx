import { QueryClient, QueryClientProvider } from "react-query";
import React, { ReactNode } from "react";

const queryClient = new QueryClient();

export default function QueryWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}