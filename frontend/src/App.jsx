import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQPage from "./FAQPage";
import FAQDetails from "./FAQDetails";
import AskQuestion from "./AskQuestion";
import Navbar from "./components/Navbar";
import AdminLogin from "./AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <FAQPage />,
      },
      {
        path: "/ask",
        element: <AskQuestion />,
      },
      {
        path: "faq/:id",
        element: <FAQDetails />,
      },
      {
        path: "/login",
        element: <AdminLogin/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
