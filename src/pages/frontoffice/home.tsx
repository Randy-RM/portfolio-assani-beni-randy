import { Helmet } from "react-helmet";
import { Container } from "../../components";

const Home = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Randy Assani Portfolio</title>
      </Helmet>
      <main className="container">
        <h1>Home Page</h1>
        <Container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <div>LOL 1</div>
          <div>LOL 2</div>
        </Container>
      </main>
    </>
  );
};

export default Home;
