import Head from "next/head";
import { TransactionContextProvider } from "../context";
import { SidebarProvider } from "../features/dashboard/SideBar/sidebarContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Salemate | your business partner</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SidebarProvider>
        <TransactionContextProvider>
          <Component {...pageProps} />
        </TransactionContextProvider>
      </SidebarProvider>
    </>
    
  )
}
