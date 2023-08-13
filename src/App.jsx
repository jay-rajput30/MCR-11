import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Watchlist from "./pages/Watchlist";

function App() {
  console.log("hello");
  return (
    <div>
      <h1>MCR 11</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
