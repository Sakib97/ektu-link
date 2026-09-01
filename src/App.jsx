import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Homepage from "./features/home/pages/HomePage";
import SignIn from "./features/auth/pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
