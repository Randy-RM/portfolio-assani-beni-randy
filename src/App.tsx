import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, WorksPage, ErrorPage } from "./pages";
import { FrontOfficeLayout, Loader, Modal } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontOfficeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/visit-my-works",
        element: <WorksPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = (): JSX.Element => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  }, []);

  if (isAppLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Modal />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
