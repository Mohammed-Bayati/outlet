import "./App.css";
import Home from "../src/pages/home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../src/components/login";
import PageN from "../src/pages/pageN";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<PageN />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
