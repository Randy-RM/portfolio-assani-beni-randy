import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import i18n from "../../translations/i18n";

type BaseHeadProps = {
  children: JSX.Element;
};

interface SiteMetadata {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

const BaseHead = ({ children }: BaseHeadProps) => {
  const data: SiteMetadata = useStaticQuery(query);

  return (
    <>
      <html lang={i18n.language} />
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
      <meta
        property="og:image"
        key="og:image"
        content={`${data.site.siteMetadata.siteUrl}/rm-landing-logo.png`}
      />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:image:src"
        key="twitter:image:src"
        content={`${data.site.siteMetadata.siteUrl}/rm-landing-logo.png`}
      />
      {/**metaSocialImageUrl end */}
      {children}
    </>
  );
};

export default BaseHead;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
