import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Utility/ErrorBoundary";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SignIn from "../Pages/SignIn/SignIn";
import SuperUser from "../Pages/SuperUserlogin/SuperUser";
import GymRegister from "../components/AddGyms/GymRegister";
import { ToastContainer } from "react-toastify";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SuperUserDashBoard from "../Pages/SuperUserDashBoard/SuperUserDashBoard";
import GymTable from "../components/AddGyms/GymTable";
import Register from "../Pages/Register/Register";

import Chart from "../components/Chart/Chart";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import "react-toastify/dist/ReactToastify.css";
import RegisterTable from "../components/Form/RegisterTable";
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
            <Route path="/GymRegister" element={<GymRegister />} />
            <Route path="/GymTable" element={<GymTable />} />
            <Route path="/update/:id" element={<GymRegister />} />
            <Route 
             path="/Dashboard" element={<Dashboard />}>
            <Route path="Register" element={<Register />} />
            <Route path="RegisterTable" element={<RegisterTable />} />
            <Route path="Chart" element={<Chart />} />
            <Route path="UserDashboard" element={<UserDashboard />}/>
            </Route>
              
            
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AppRouter;
