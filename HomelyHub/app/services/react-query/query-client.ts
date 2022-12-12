import {QueryClient} from '@tanstack/react-query';

// Create a client
export const RNQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: 'always',
      cacheTime: 2000,
    },
  },
});
