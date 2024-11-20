import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Junaid Parkar",
  description: "Junaid parkar portfolio",
  icon: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="antialiased h-auto w-full bg-light-background dark:bg-dark-background"
      >
        {children}
      </body>
    </html>
  );
}
