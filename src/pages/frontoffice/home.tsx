import { Helmet } from "react-helmet";

const Home = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Randy Assani Portfolio</title>
      </Helmet>
      <main className="container">
        <h1>Home Page</h1>
      </main>
    </>
  );
};

export default Home;
