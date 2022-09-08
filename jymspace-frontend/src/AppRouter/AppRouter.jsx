import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Utility/ErrorBoundary";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SignIn from "../Pages/SignIn/SignIn";
import SuperUser from "../Pages/SuperUserlogin/SuperUser";
import GymRegister from "../components/AddGyms/GymRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SuperUserDashBoard from "../Pages/SuperUserDashBoard/SuperUserDashBoard";
import GymTable from "../components/AddGyms/GymTable";
import Register from "../Pages/Register/Register";
const Home = lazy(() => import("../Pages/Home/Home"));
const Pricing = lazy(() => import("../Pages/Pricing/Pricing"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));

const AppRouter = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer position="top-center" />
         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SuperUser" element={<SuperUser />} />
            <Route
              path="/SuperUserDashboard"
              element={<SuperUserDashBoard />}
            />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/GymRegister" element={<GymRegister />} />
            <Route path="/GymTable" element={<GymTable />} />
            <Route path="/update/:id" element={<GymRegister />} />
            <Route path="Register" element={<Register />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AppRouter;
