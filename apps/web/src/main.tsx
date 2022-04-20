import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import './styles/bootstrap.min.css';
import './styles/index.css';

const client = new QueryClient();

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
