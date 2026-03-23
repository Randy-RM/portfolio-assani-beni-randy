import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { marked } from "marked";
import {
  Container,
  GsapInView,
  GsapOrigamiPop,
  GsapRevealText,
  GsapSplitText,
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

type BlogDetailAppProps = {
  posts: AstroPostData[];
  slug: string;
};

const normalizeSlug = (value?: string): string =>
  (value ?? "").trim().replace(/^\/+/, "").replace(/\/+$/, "");

const formatDate = (date: string, language: string): string => {
  const locale = language.startsWith("fr") ? "fr-FR" : "en-US";
  return new Date(date).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const renderMarkdown = (rawBody?: string): string => {
  if (!rawBody) {
    return "";
  }

  return marked.parse(rawBody, { async: false }) as string;
};

const BlogDetailApp = ({ posts, slug }: BlogDetailAppProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language?.startsWith("fr") ? "fr" : "en";
  const normalizedRouteSlug = normalizeSlug(slug);

  const activePost = useMemo(() => {
    const byLanguage = posts.find(
      (post) =>
        post.language === currentLanguage &&
        normalizeSlug(post.contentSlug ?? post.slug) === normalizedRouteSlug,
    );

    if (byLanguage) {
      return byLanguage;
    }

    return posts.find(
      (post) =>
        normalizeSlug(post.contentSlug ?? post.slug) === normalizedRouteSlug,
    );
  }, [currentLanguage, normalizedRouteSlug, posts]);

  if (!activePost) {
    return (
      <AppShell>
        <section className="bg-primary-color">
          <div className="container text-center">
            <Spacer height={6} />
            <h1 className="h2">{t("errorPage.errorPageMessage")}</h1>
            <p>
              <a href="/blog">{t("blogPage.detail.backToBlog")}</a>
            </p>
            <Spacer height={6} />
          </div>
        </section>
      </AppShell>
    );
  }

  const htmlContent = useMemo(
    () => renderMarkdown(activePost.body),
    [activePost.body],
  );

  return (
    <AppShell>
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={4} />
          <p className="margin-0">
            <a className="blog-back-link" href="/blog">
              {t("blogPage.detail.backToBlog")}
            </a>
          </p>
          <Spacer height={2} />

          <GsapOrigamiPop as="article" className="">
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              flexWrap="wrap"
            >
              <p className="blog-card-date margin-0">
                {t("blogPage.detail.publishedOn")}{" "}
                {formatDate(activePost.date, currentLanguage)}
              </p>
              <Spacer height={2} />

              <h1 className="h2 margin-0">
                <GsapSplitText
                  duration={0.7}
                  delay={0.2}
                  direction="bottom-to-top"
                  content={activePost.contentTitle ?? "Untitled post"}
                />
              </h1>

              {!!activePost.contentTags?.length && (
                <div className="blog-card-tags">
                  {activePost.contentTags.map((tag) => (
                    <span
                      key={`${activePost.contentId}-${tag}`}
                      className="badge blog-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Container>
          </GsapOrigamiPop>
          <Spacer height={2} />
        </div>
      </section>

      <section className="bg-primary-color">
        <div className="container">
          <GsapInView
            as="article"
            className="blog-prose"
            delay={0.15}
            duration={0.9}
            from={{ opacity: 0, y: 26 }}
            to={{ opacity: 1, y: 0 }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <Spacer height={4} />
        </div>
      </section>

      <section className="bg-primary-color">
        <div className="container">
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <div className="blog-summary-card">
              <h2 className="h3 margin-0">
                <GsapSplitText
                  duration={0.6}
                  delay={0.2}
                  direction="bottom-to-top"
                  content={t("blogPage.detail.summaryTitle")}
                />
              </h2>
              <Spacer height={1} />
              <p className="blog-detail-lead">
                <GsapRevealText
                  duration={0.9}
                  delay={0.45}
                  direction="bottom-to-top"
                  content={activePost.contentDescription ?? ""}
                />
              </p>
            </div>
          </Container>
        </div>
      </section>
    </AppShell>
  );
};

export default BlogDetailApp;
