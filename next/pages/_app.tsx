import '../styles/globals.css'
import '../public/assets/scss/styles.scss';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from '@components/Layout';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
