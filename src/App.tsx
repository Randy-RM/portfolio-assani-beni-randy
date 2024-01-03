import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, WorksPage, ErrorPage } from "./pages";
import { FrontOfficeLayout, Loader, Modal } from "./components";
import { useThemeStore } from "./store";

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
  // "select" the needed state and action
  const themeState = useThemeStore((state) => state.themeState);
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {}, [themeState]);

  if (isAppLoading) {
    return (
      <div className={`theme--${themeState}`}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={`theme--${themeState}`}>
      <Modal />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
