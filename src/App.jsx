import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Homepage from "./features/home/pages/HomePage";
import SignIn from "./features/auth/pages/SignIn";
import DashboardPage from "./features/dashboard/layout/DashboardPage.jsx";
import LinksPage from "./features/dashboard/pages/LinksPage.jsx";

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
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Dashboard Routes will not have navigation bar and footer */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Navigate to="links" replace />} />
          <Route path="links" element={<LinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
