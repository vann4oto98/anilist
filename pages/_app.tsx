import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../src/helpers/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
