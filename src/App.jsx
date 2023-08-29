import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import { stocks } from "./stock-data.js";

function App() {
  return (
    <div className="App container fluid">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stocks={stocks} />} />
        <Route path="/stocks/:symbol" element={<Stock stocks={stocks} />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
