import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Cursos from "./views/Cursos";
import Inscripciones from "./views/Inscripciones";
import Registro from "./views/Registro";
import Profile from "./views/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inscripciones" element={<Inscripciones />}></Route>
          <Route path="/cursos" element={<Cursos />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
