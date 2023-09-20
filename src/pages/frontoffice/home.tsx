import { Helmet } from "react-helmet";
import { Container, Spacer } from "../../components";
import RandyPicture from "../../assets/images/rm-hero-photo.png";

const Home = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Randy Assani Portfolio</title>
      </Helmet>
      <main className="container">
        {/**Hero section start */}
        <div className="bg-light-grey">
          <Spacer height={2} />
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <div className="width-50 text-center-on-mobile">
              <p className="font-big-hero font-w-Black">
                {`Hi! I'm`}
                <br />
                <span>{`Software`}</span>
                <br />
                <span>
                  <mark className="special-mark">{`Engineer`}</mark>
                </span>
              </p>
              <p className="font-lead-hero">
                {`Technology, software development`}
                <br />
                {`and design are my passions.`}
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  CONTACT ME
                </a>
              </p>
            </div>
            <div className="width-40 hide-bloc-on-mobile">
              <p>
                <img
                  src={RandyPicture}
                  alt="Randy Assani"
                  className="hero-image"
                />
              </p>
            </div>
          </Container>
          <Spacer height={2} />
        </div>
        {/**Hero section end */}
      </main>
    </>
  );
};

export default Home;
