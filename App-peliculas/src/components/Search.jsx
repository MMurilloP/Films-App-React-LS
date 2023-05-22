/* eslint-disable react/prop-types */
import { useState } from "react";

const Search = ({ listStateMovie, setListStateMovie }) => {
  const [search, setSearch] = useState("");
  const [noFindMovie, setNoFindMovie] = useState(false)

  const searchFilm = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    let searchFilms = listStateMovie.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });

    if (search.length <= 1 || searchFilms <= 0) {
      searchFilms = JSON.parse(localStorage.getItem("movies"));
      setNoFindMovie(true);
    } else {
      setNoFindMovie(false)
    }

    setListStateMovie(searchFilms);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {(noFindMovie == true  && search.length > 1)&& <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>}
    
      <form>
        <input
          type="text"
          id="search_field"
          name="search"
          autoComplete="off"
          value={search}
          onChange={searchFilm}
        />

        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Search;
