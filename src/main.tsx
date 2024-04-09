import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import metaSocialImageUrl from "../src/assets/images/rm-landing-logo.png";
import App from "./App.tsx";
import "./assets/sass/main.scss";
import i18n from "./translations/i18n";

const htmlRootTag = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRootTag!);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet prioritizeSeoTags htmlAttributes={{ lang: i18n.language }}>
        {/**metaTitle start */}
        <meta name="og:title" key="og:title" content={"Randy Assani RM"} />
        <meta
          name="twitter:title"
          key="twitter:title"
          content={"Randy Assani RM"}
        />
        {/**metaTitle end */}
        {/**metaSocialImageUrl start */}
        <meta property="og:image" key="og:image" content={metaSocialImageUrl} />
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:image:src"
          key="twitter:image:src"
          content={metaSocialImageUrl}
        />
        {/**metaSocialImageUrl end */}
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
