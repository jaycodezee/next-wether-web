import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-DdEHr7xSKLR3F9mQSBJNywOB3tQFuVio3bX25F3LO51L54jAsyRYmyt6yXoRVtAc"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
          integrity="sha384-KsvV6vMFJ6v5lgRQbM7aNJ5ryFMWp4aZKzM3oHJpNzH1P5Zk5tkArPV5pGZOyjs5"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4Ag8EQz8pM8Q8tewFYLU2Cp+9e4sQXlXZ7rHdLrCXj5Cx7blXg1L"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
