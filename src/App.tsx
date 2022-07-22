import React, { lazy, Suspense } from "react";
import Navbar from "./components/NavBar/Navbar/Navbar";
import PageLoader from "./components/PageLoader";

const Presale = lazy(() => import("./components/Presale"));

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div
        style={{
          backgroundImage: "linear-gradient(to left, #434343 0%, black 100%)",
        }}
      >
        <Navbar />
        <Presale />
      </div>
    </Suspense>
  );
};

export default React.memo(App);
