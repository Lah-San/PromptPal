import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Head from "next/head";

export const metadata = {
  icons: {
    icon: "assets/images/favicon.ico",
  },
  title: "PromptPal",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
