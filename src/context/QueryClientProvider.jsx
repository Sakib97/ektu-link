import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2, // Retry failed queries twice
            refetchOnWindowFocus: false, // Don't refetch on window focus
            staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
            gcTime: 30 * 60 * 1000, // Cache data for 30 minutes
        },
    },
});


const CustomQueryClientProvider = ({ children }) => {
    return ( 
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
     );
}
 
export default CustomQueryClientProvider;