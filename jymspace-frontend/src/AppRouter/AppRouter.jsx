import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../Utility/ErrorBoundary'
import AboutUs from '../Pages/AboutUs/AboutUs'
import SignIn from '../Pages/SignIn/SignIn'
import { ToastContainer } from 'react-toastify'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SuperUserDashBoard from '../Pages/SuperUserDashBoard/SuperUserDashBoard'
import GymTable from '../components/AddGyms/GymTable'
import Logout from '../components/Logout/Logout'
import UserDashboard from '../components/UserDashboard/UserDashboard'
import RegisterTable from '../components/Form/RegisterTable'
import 'react-toastify/dist/ReactToastify.css'

const Home = lazy(() => import('../Pages/Home/Home'))

const ContactUs = lazy(() => import('../Pages/ContactUs/ContactUs'))

const AppRouter = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer style={{ zIndex: 9 }} position='top-center' />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Logout' element={<Logout to='/SignIn' />} />
            <Route path='/SuperUserDashboard' element={<SuperUserDashBoard />} />
            <Route path='/GymTable' element={<GymTable />} />
            <Route path='/Dashboard' element={<Dashboard />}>
              <Route path='Home' element={<UserDashboard />} />
              <Route path='RegisterTable' element={<RegisterTable />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default AppRouter
