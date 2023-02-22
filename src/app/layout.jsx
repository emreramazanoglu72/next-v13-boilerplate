import Header from "@/components/layouts/Header";
import "../styles/global.scss";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en" thema="light">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
