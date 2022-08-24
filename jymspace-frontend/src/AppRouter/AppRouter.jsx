import {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Utility/ErrorBoundary";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
const Home = lazy(() => import ("../components/Pages/Home/Home"));


const AppRouter = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/AboutUs" element={<AboutUs/>} />
      </Routes>
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AppRouter;
