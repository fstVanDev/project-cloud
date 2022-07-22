import React, { lazy } from "react";
import Navbar from "./components/NavBar/Navbar/Navbar";

const Presale = lazy(() => import("./components/Presale"));

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left, #434343 0%, black 100%)",
      }}
    >
        <Navbar />
        <Presale/>
    </div>
  );
};

export default React.memo(App);
