import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Homepage from "./features/home/pages/HomePage";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavigationBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
