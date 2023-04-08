import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Cursos from './views/cursos';
import Inscripciones from './views/inscripciones';
import Registro from './views/registro';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container-md">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inscripciones" element={<Inscripciones />}></Route>
          <Route path="/cursos" element={<Cursos />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
