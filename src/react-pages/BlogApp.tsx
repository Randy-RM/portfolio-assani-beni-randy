import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  BouncingArrow,
  Container,
  GsapInView,
  GsapRevealText,
  GsapScaleBounce,
  GsapSplitText,
  GsapStaggerInView,
  Spacer,
} from "../components";
import AppShell from "../components/layout/app-shell";

type AstroPostData = {
  contentId: string;
  contentType: string;
  contentSlug?: string;
  slug?: string;
  date: string;
  language: string;
  featuredImage?: string;
  contentTags?: string[];
  contentTitle?: string;
  contentDescription?: string;
  body?: string;
};

type BlogAppProps = {
  posts: AstroPostData[];
};

const normalizeSlug = (value?: string): string =>
  (value ?? "").trim().replace(/^\/+/, "").replace(/\/+$/, "");

const formatDate = (date: string, language: string): string => {
  const locale = language.startsWith("fr") ? "fr-FR" : "en-US";
  return new Date(date).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const truncateText = (value: string, maxLength = 100): string => {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}...`;
};

const getPostImage = (featuredImage?: string): string => {
  if (!featuredImage) {
    return "/rm-landing-logo.png";
  }

  if (
    featuredImage.startsWith("http://") ||
    featuredImage.startsWith("https://")
  ) {
    return featuredImage;
  }

  const normalizedPath = featuredImage.replace(/\\/g, "/");
  const fileName = normalizedPath.split("/").filter(Boolean).pop();

  return fileName ? `/posts-images/${fileName}` : "/rm-landing-logo.png";
};

const BlogApp = ({ posts }: BlogAppProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language?.startsWith("fr") ? "fr" : "en";

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => post.language === currentLanguage)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [currentLanguage, posts]);

  return (
    <AppShell>
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={4} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <div className="width-100 text-center">
              <h1 className="font-big-hero font-w-Black margin-0">
                <GsapRevealText
                  className="font-animated-gradient-color"
                  duration={0.65}
                  delay={0.5}
                  direction="top-to-bottom"
                  content={t("blogPage.hero.title")}
                />
              </h1>

              <Spacer height={2} />
              <p className="blog-hero-subtitle">
                <GsapInView
                  as="span"
                  delay={0.5}
                  duration={1.1}
                  style={{ display: "inline-block" }}
                >
                  {t("blogPage.hero.subtitle")}
                </GsapInView>
              </p>
            </div>
          </Container>
          <Spacer height={4} />
        </div>
      </section>

      <section className="bg-primary-color">
        <div className="container">
          <Container>
            <GsapStaggerInView
              className="blog-grid"
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              stagger={0.15}
              duration={0.6}
            >
              {filteredPosts.map((post) => {
                const linkSlug = normalizeSlug(post.contentSlug ?? post.slug);
                const title = post.contentTitle ?? "Untitled post";
                const description = truncateText(post.contentDescription ?? "");
                const cardImage = getPostImage(post.featuredImage);

                return (
                  <GsapScaleBounce
                    as="article"
                    className="blog-card"
                    key={post.contentId}
                    delay={0.5}
                    repeat={0}
                  >
                    <p className="blog-card-date margin-0">
                      {formatDate(post.date, currentLanguage)}
                    </p>
                    <h2 className="h3 margin-t-b-1">{title}</h2>

                    <img
                      src={cardImage}
                      alt={title}
                      className="card-img"
                      loading="lazy"
                    />

                    <p className="blog-card-description">{description}</p>

                    {!!post.contentTags?.length && (
                      <div className="blog-card-tags">
                        {post.contentTags.map((tag) => (
                          <span
                            key={`${post.contentId}-${tag}`}
                            className="badge blog-tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a className="blog-read-link" href={`/blog/${linkSlug}`}>
                      {t("blogPage.list.readArticle")}
                    </a>
                  </GsapScaleBounce>
                );
              })}
            </GsapStaggerInView>
          </Container>
          <Spacer height={6} />
        </div>
      </section>
    </AppShell>
  );
};

export default BlogApp;
