import { Helmet } from "react-helmet";
import { Container, Spacer, Badge } from "../../components";
import RandyPicture from "../../assets/images/rm-hero-photo.png";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";

const Home = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Randy Assani Portfolio</title>
      </Helmet>
      <main className="container">
        {/**Hero section start */}
        <section className="bg-light-grey">
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
                  alt="Randy Assani Picture"
                  className="hero-image"
                />
              </p>
            </div>
          </Container>
          <Spacer height={6} />
        </section>
        {/**Hero section end */}
        {/**About me section start */}
        <section className="bg-light-grey">
          <Spacer height={6} />
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <div className="width-40 text-center-on-mobile">
              <h2 className="font-w-Black h2">
                ABOUT <span className="font-brand-color">ME</span>
              </h2>
              <p>
                <span className="font-w-extra-bold">FOLLOW ME ON</span>
                <br />
                <a href="https://github.com/Randy-RM" target="_blank">
                  <img src={GithubCircleIcon} alt="Github profile" />
                </a>
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                  target="_blank"
                >
                  <img src={LinkedinIcon} alt="Linkdin profile" />
                </a>
              </p>
            </div>
            <div className="width-50 p-2 bg-mid-grey text-center-on-mobile">
              <p>HI. I'm Randy Assani Beni (RM).</p>
              <p>
                I'm Analyst Designer with a Computer Science degree and
                experience on computer engineering, software development &
                graphic design.
              </p>
              <p>
                I am always developing my skills and learning something new. I
                have a thirst for knowledge and a desire to understand how
                things work; I'm a people person, a tinkerer, a lover of
                technology/science."
              </p>
            </div>
          </Container>
          <Spacer height={6} />
        </section>
        {/**About me section end */}
        {/**Technologies section start */}
        <section className="bg-light-grey">
          <Spacer height={6} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <div className="width-50 text-center">
              <h2 className="font-w-Black h2">
                <span className="font-brand-color">TECH</span>NOLOGIES
              </h2>
              <p>Here are a few technologies I’ve been working with recently</p>
            </div>
            <div className="width-50 text-center">
              <Spacer />
              <Badge badgeText="HTML" />
              <Badge badgeText="CSS" />
              <Badge badgeText="Javascript" />
              <Badge badgeText="Typescript" />
              <Badge badgeText="Node Js" />
              <Badge badgeText="Express Js" />
              <Badge badgeText="Nest Js" />
              <Badge badgeText="React Js" />
              <Badge badgeText="React native" />
              <Badge badgeText="Sass" />
              <Badge badgeText="PHP" />
              <Badge badgeText="Wordpress" />
              <Badge badgeText="Symfony" />
              <Badge badgeText="Laravel" />
              <Badge badgeText="MySql" />
              <Badge badgeText="MongDB" />
              <Badge badgeText="Postgresql" />
              <Badge badgeText="Linux" />
              <Spacer />
            </div>
          </Container>
          <Spacer height={6} />
        </section>
        {/**Technologies section end */}
      </main>
    </>
  );
};

export default Home;
