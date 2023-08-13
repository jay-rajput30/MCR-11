import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
