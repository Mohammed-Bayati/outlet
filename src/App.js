import "./App.css";
import Home from "../src/pages/home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../src/components/login";
import PageN from "../src/pages/pageN";
import Sidebar from "../src/pages/sidebar";
import Types from "../src/pages/types";
import Post from "../src/pages/Post";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<PageN />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcomePage" element={<Sidebar/>}>
          <Route path="types" element={<Types/>}/>
          <Route path="Post" element={<Post/>}/>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
