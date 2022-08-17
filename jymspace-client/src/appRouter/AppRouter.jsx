import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";
const Home = lazy(() => import("../components/Pages/Home"));
const About = lazy(() => import("../components/Pages/About/About"));
const Signin = lazy(() => import("../components/Signin/Signin"));

const AppRouter = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AppRouter;
