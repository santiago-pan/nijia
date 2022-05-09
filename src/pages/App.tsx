import { Link } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HomeNavBlock from "./ui/HomeNavBlock";
import HomeSearch from "./ui/HomeSearch";

function App() {
  return (
    <>
      <HomeSearch />
    </>
  );
}

export default App;
