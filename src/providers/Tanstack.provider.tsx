"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanStackProvider = ({ children }: any) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default TanStackProvider;
