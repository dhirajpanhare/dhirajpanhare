import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Certificates from "./Pages/Certificates";
import Register from "./Pages/Register";
import Notes from "./Pages/Notes";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/About" element={<About />}> </Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/Projects" element={<Projects />}> </Route>
          <Route path="/Certificates" element={<Certificates />}> </Route>
          <Route path="/Notes" element={<Notes />}> </Route>
          <Route path="/Register" element={<Register />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;