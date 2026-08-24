import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./features/home/pages/HomePage";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <Homepage />
    </>
  );
}

export default App;
