import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import App from "./App.tsx";
import "./assets/sass/main.scss";
import metaSocialImageUrl from "../src/assets/images/rm-landing-logo.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        {/**metaTitle start */}
        <meta name="og:title" key="og:title" content={"Randy Assani RM"} />
        <meta
          name="twitter:title"
          key="twitter:title"
          content={"Randy Assani RM"}
        />
        {/**metaTitle end */}
        {/**metaDescription start */}
        <meta
          name="description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        <meta
          name="og:description"
          key="og:description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        {/**metaDescription end */}
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
