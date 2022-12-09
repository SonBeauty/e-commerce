import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ApolloProvider>
  );
}
