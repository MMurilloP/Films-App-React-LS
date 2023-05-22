/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EditFilm from "./EditFilm";

const List = ({ listStateMovie, setListStateMovie }) => {
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    console.log("load component");
    getFilms();
  }, []);

  const getFilms = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setListStateMovie(movies);
    return movies;
  };

  const deleteFilm = (id) => {
    let moviesSaved = getFilms();
    let newArrayMovies = moviesSaved.filter(
      (movie) => movie.id !== parseInt(id)
    );

    setListStateMovie(newArrayMovies);
    localStorage.setItem("movies", JSON.stringify(newArrayMovies));
  };

  return (
    <>
      {listStateMovie != null ? (
        listStateMovie.map((listMovie) => {
          return (
            <article key={listMovie.id} className="peli-item">
              <h3 className="title">{listMovie.title}</h3>
              <p className="description">{listMovie.description}</p>

              <button
                className="edit"
                onClick={() => {
                  setEdit(listMovie.id);
                }}
              >
                Editar
              </button>

              <button className="delete" onClick={() => deleteFilm(listMovie.id)}>
                Borrar
              </button>

              {edit === listMovie.id && (

                <EditFilm listMovie ={listMovie} 
                          getFilms = {getFilms}
                          setEdit= {setEdit}
                          setListStateMovie = {setListStateMovie}/>

              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas que mostrar</h2>
      )}
    </>
  );
};

export default List;
