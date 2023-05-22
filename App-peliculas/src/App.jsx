import { useState } from "react";
import CreateFilm from "./components/CreateFilm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  const [listStateMovie, setListStateMovie] = useState([]);

  return (
    <>
      <div className="layout">
        {/*Cabecera*/}
        <Header />
        {/*Barra de navegación*/}
        <NavBar />
        {/*Contenido principal*/}
        <section id="content" className="content">
          {/*aqui van las peliculas*/}
          <List listStateMovie={listStateMovie} setListStateMovie={setListStateMovie} />
        </section>
        {/*Barra lateral*/}
        <aside className="lateral">
          <Search  listStateMovie={listStateMovie} setListStateMovie={setListStateMovie}/>
          <CreateFilm setListStateMovie={setListStateMovie}  />
        </aside>
        {/*Pie de página*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
