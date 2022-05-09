import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToBuy } from "./ToBuy";
import { ToRent } from "./ToRent";

export default function AppRoutes() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="rent" element={<ToRent />} />
            <Route path="buy" element={<ToBuy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
