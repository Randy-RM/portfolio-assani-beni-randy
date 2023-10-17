import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Spacer } from "../../components";
import EmojiPuzzled from "../../assets/images/iconoir_emoji_puzzled.svg";

const NotFoundPage = (): JSX.Element => {
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
                    alt="Page not found icon"
                  />
                  <br />
                  <span className="font-big-hero font-w-Black">
                    4<span className="font-brand-color">0</span>4
                  </span>
                  <br />
                  <span>Page Not Found</span>
                </p>
                <p className="text-center">
                  <Link to="/">Click here to go back home page</Link>
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

export default NotFoundPage;
