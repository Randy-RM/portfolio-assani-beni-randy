import { motion } from "framer-motion";
import { HeadFC, Link } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { BaseHead, Container, FrontOfficeLayout, Spacer } from "../components";
import { EmojiPuzzledIcon } from "../images";

export const Head: HeadFC = () => {
  return (
    <BaseHead>
      <title>404 Page Not Found | Randy Assani RM</title>
    </BaseHead>
  );
};

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FrontOfficeLayout>
      <div>
        <section className="bg-primary-color font-secondary-color">
          <div className="container">
            <Spacer height={6} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                delay: 0.3,
                easeInOut: "linear",
                duration: 2,
              }}
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
                    alt={t(`errorPage.errorIcon`)}
                  />
                  <br />
                  <span className="font-big-hero font-w-Black">
                    4<span className="font-brand-color">0</span>4
                  </span>
                  <br />
                  <span>
                    <i>{t(`errorPage.errorPageMessage`)}</i>
                  </span>
                </p>
                <p className="text-center">
                  <Link to="/">{t(`errorPage.goBackHome`)}</Link>
                </p>
              </Container>
            </motion.div>
            <Spacer />
          </div>
        </section>
      </div>
    </FrontOfficeLayout>
  );
};

export default NotFoundPage;
