import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import Menu from "./components/Menu/whatWeOffer"
import Musics from "./components/Musics/Musics"
import Movies from "./components/MOvies/Movies"
import Books from "./components/Books/Books"
import Excercises from "./components/Exercise/Excercises"
import Treat from "./components/Treat/treat"
import About from './components/AboutPage/About';


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index exact element={<Home />} />
          <Route  path='menu' exact element={<Menu />} />
          <Route  path='music' exact element={<Musics />} />
          <Route  path='movies' exact element={<Movies />} />
          <Route  path='books' exact element={<Books />} />
          <Route  path='about' exact element={<About />} />
          <Route  path='exercise' exact element={<Excercises />} />
          <Route path="treat" exact element={<Treat />}/>
      </Routes>
    </BrowserRouter>

        </>
  );
}

export default App;
