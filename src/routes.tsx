import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./routing/ContactPage";
import HomePage from "./routing/HomePage";
import Layout from "./routing/Layout";
import UserDetail from "./routing/UserDetail";
import UsersPage from "./routing/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },

      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
