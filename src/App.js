import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
import { createBrowserRouter } from "react-router-dom";
import Table from "./components/Table";
import { RouterProvider } from "react-router-dom";
import ProductShow from "./components/Products/ProductShow";
import InputData from "./components/DataInput/InputData";
// import Popup from "./components/Popup/Popup";
import Root from "./Root";
import Modals from "./components/Modal/Modal";
import Error from "./components/ErrorPage/Error";
import About from "./components/About/About";
// import { BrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter([
  ///for responsive navigation
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "ProductShow", element: <ProductShow /> },
      { path: "Table", element: <Table /> },
      { path: "About", element: <About /> },
      { path: "InputData", element: <InputData /> },
      { path: "*", element: <Error /> }
    ]
  }
]);
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    return setShow(true);
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
      <Modals
        ShowModals={show}
        close={handleClose}
        title="Welcome to my first Project"
        textArea="In this website we are using useEffect , useState,Routers , bootstrap ,and modals"
      />
    </div>
  );
};

export default App;
