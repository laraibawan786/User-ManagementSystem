import { Routes, Route, Link } from "react-router-dom";
import Splash from "./pages/Splash";
import Register from "./pages/Register";
import Students from "./pages/Students";
import Navbar from "./components/Navbar";  
import StudentCard from "./components/StudentCard";  

export default function App() {
  return (
    <div>
      {/* ✅ Use Navbar Component here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

