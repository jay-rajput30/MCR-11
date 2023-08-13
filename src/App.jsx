import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home searchText={searchText} />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
