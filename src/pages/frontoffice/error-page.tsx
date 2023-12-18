import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container, Spacer } from "../../components";
import EmojiPuzzled from "../../assets/images/iconoir_emoji_puzzled.svg";

const ErrorPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Page Not Found | Randy Assani RM</title>
      </Helmet>
      <main>
        <section className="bg-light-grey">
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
                  <img
                    src={EmojiPuzzled}
                    className="logo"
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
      </main>
    </>
  );
};

export default ErrorPage;
