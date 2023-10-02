import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Spacer } from "../../components";
import EmojiPuzzled from "../../assets/images/iconoir_emoji_puzzled.svg";

const NotFound = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Randy Assani Portfolio</title>
      </Helmet>
      <main>
        <section className="bg-light-grey">
          <div className="container">
            <Spacer height={6} />
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
                  alt="RM Randy Assani Logo"
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
            <Spacer />
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
