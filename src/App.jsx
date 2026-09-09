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
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import AuthRedirect from "./components/common/AuthRedirect.jsx";

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
      <ScrollToTopOnNav />
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<AuthRedirect><SignIn /></AuthRedirect         >} />
        </Route>

        {/* Dashboard Routes will not have navigation bar and footer */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="links" element={<LinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
