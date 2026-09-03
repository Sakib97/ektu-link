import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Homepage from "./features/home/pages/HomePage";
import SignIn from "./features/auth/pages/SignIn";
import DashboardPage from "./features/dashboard/layout/DashboardPage.jsx";
import LinksPage from "./features/dashboard/pages/LinksPage.jsx";
import ProfilePage from "./features/dashboard/pages/ProfilePage.jsx";
import ScrollToTopOnNav from "./components/ui/ScrollToTopOnNav.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

function PublicLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTopOnNav/>
      <ScrollToTop/>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Dashboard Routes will not have navigation bar and footer */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="links" element={<LinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
