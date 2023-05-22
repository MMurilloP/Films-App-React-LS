/* eslint-disable react/prop-types */
import { useState } from "react";
import saveLocalStorage from "../helpers/SaveLocalStorage";

const CreateFilm = ({setListStateMovie}) => {
  const title = "Añadir pelicula:";

  const [movieState, setMovieState] = useState({
    title: "",
    description: "",
  });

  const getData = (e) => {
    e.preventDefault();
		
    //get data form inputs
    let title = e.target.title.value;
    let description = e.target.description.value;

    //create object with title and description
    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };
    // save State
    setMovieState(movie);

    setListStateMovie(items=>{
        return [...items,movie ];
    });

		// save in Local Storage. helpers.
    saveLocalStorage("movies", movie);


  };


  return (
    <div className="add">
      <h3 className="title">{title}</h3>

      <form onSubmit={getData}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
        <h4 className="title">
          {movieState.title &&
            movieState.description &&
            `Has creado la pelicula ${movieState.title}`}{" "}
        </h4>
      </form>
    </div>
  );
};

export default CreateFilm;
