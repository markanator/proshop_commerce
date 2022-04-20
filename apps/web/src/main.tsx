import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import './styles/bootstrap.min.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      retry: 2,
    },
  },
});

const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <App />
      </QueryClientProvider>
    </Provider>
  </>
);
