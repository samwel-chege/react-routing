import "bulma/css/bulma.min.css"
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
         <Route path="/about" element={<About />}>

         </Route>
        
        </Routes>
      </div>
    
    </>
  );
}

export default App;
