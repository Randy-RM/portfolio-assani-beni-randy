import { Helmet } from "react-helmet";

const NotFound = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Randy Assani Portfolio</title>
      </Helmet>
      <h1>404 : Page Not Found</h1>
    </>
  );
};

export default NotFound;
