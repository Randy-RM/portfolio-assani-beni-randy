import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Spacer } from "../components";
import { EmojiPuzzledIcon } from "../images";
import AppShell from "../components/layout/app-shell";

/**
 * NotFoundApp - Application React pour la page 404.
 */
const NotFoundApp = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AppShell>
      <section className="bg-primary-color font-secondary-color">
        <div className="container">
          <Spacer height={6} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3, duration: 2 }}
          >
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <p className="text-center">
                <EmojiPuzzledIcon
                  className="themed-stroke-icon logo"
                  alt={t("errorPage.errorIcon")}
                />
                <br />
                <span className="font-big-hero font-w-Black">
                  4<span className="font-brand-color">0</span>4
                </span>
                <br />
                <span>
                  <i>{t("errorPage.errorPageMessage")}</i>
                </span>
              </p>
              <p className="text-center">
                <a href="/">{t("errorPage.goBackHome")}</a>
              </p>
            </Container>
          </motion.div>
          <Spacer />
        </div>
      </section>
    </AppShell>
  );
};

export default NotFoundApp;
