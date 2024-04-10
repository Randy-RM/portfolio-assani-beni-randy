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
        {/**metaKeywords  start */}
        <meta
          name="keywords"
          content="randy assani beni, randy assani, randy muhema, assani beni, randy, assani, muhema, software engineer, ux/ui design, ux/ui, ui/ux, ux design, ui design, html, css, javascript, typescript, node, node js, nodejs, express js, expressjs, express, nest, nest js, nestjs, react js, reactjs, react, react native, reactnative, sass, php, wordpress, symfony, laravel, java, fullstack developer, fullstack, full-stack, developer, rm, randy-rm, randy rm, developer kinshasa, developer congo, designer, ui/ux designer, ux/ui designer, ux designer, ui designer"
        />
        {/**metaKeywords  end */}
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
