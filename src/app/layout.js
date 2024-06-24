import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.5"
          />
          <title>Nike</title>
        </head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
