import { Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./Components/Sidebar/Navbar";
import All from "./Components/Home/All"
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Main from "./Components/Home/Main";
import Home from "./Components/Home/Home";


export default function App() {
  return (
    <Routes className="App">
      <Route path="/Navbar" element={< Navbar/>} />
      <Route path="/All" element={< All/>} />
      <Route path="/Table" element={< Table/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/" element={<Main/>} />
    
      <Route path="/home" element={<Home/>} />





      


    </Routes>
  );
}
