import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import Myaccount from "../pages/Myaccount";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Announcement from "../components/Announcement";
const App = () => {
  const Layout = () => {
    return (
      <div>
        <Announcement />
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
