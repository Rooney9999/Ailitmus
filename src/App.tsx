import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { ROUTES } from './Constant/routes';
import './App.css';
import UserManagement from './Pages/Settings/UserManagement/Index';
import ForgotPassword from './Pages/Auth/ForgotPassword/Index';
import ProfileDetails from './Pages/Settings/ProfileDetails/Index';
import Jobs from './Pages/Jobs/Index';
import Billing from './Pages/Billing/Index';
import CompanyIntroduction from './Pages/Settings/CompanyIntroduction/Index';
import Explore from './Pages/Explore/Index';
import Login from './Pages/Auth/Login/Index';
import Signup from './Pages/Auth/Signup/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.ROOT} element={<Login />} />
        <Route path={ROUTES.JOBS} element={<Layout />}>
          <Route index element={<Jobs />} />
        </Route>
        <Route path={ROUTES.BILLING} element={<Layout />}>
          <Route index element={<Billing />} />
        </Route>
        <Route path={ROUTES.EXPLORE} element={<Layout />}>
          <Route index element={<Explore />} />
        </Route>
        <Route path={ROUTES.SETTINGS} element={<Layout />}>
          <Route path={ROUTES.PROFILE} element={<ProfileDetails/>} />
          <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} />
          <Route path={ROUTES.COMPANY_INTRODUCTION} element={<CompanyIntroduction />} />
          <Route index element={<ProfileDetails />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;