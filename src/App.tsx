import React, { lazy, Suspense } from "react";
import Navbar from "./components/NavBar/Navbar/Navbar";
import PageLoader from "./components/PageLoader";
// import NewPresale from "./components/NewPresale/NewPresale";

const Presale = lazy(() => import("./components/Presale"));

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div>
        <Navbar />
           <Presale />
           {/* <NewPresale/> */}
      </div>
    </Suspense>
  );
};

export default React.memo(App);
