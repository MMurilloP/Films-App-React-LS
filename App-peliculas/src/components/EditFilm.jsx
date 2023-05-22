/* eslint-disable react/prop-types */
const EditFilm = ({ listMovie, getFilms, setEdit, setListStateMovie }) => {
  const saveEditMovie = (e, id) => {
    e.preventDefault();
    const filmsSave = getFilms();
    const index = filmsSave.findIndex((listMovie) => listMovie.id === id);

    let listMovie_upDate = {
      id,
      title: e.target.title.value,
      description: e.target.description.value,
    };

    filmsSave[index] = listMovie_upDate;

    localStorage.setItem("movies", JSON.stringify(filmsSave));

    setListStateMovie(filmsSave);
    setEdit(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">Editar pelicula:</h3>

      <form onSubmit={(e) => saveEditMovie(e, listMovie.id)}>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={listMovie.title}
        />
        <textarea
          id="description"
          name="description"
          defaultValue={listMovie.description}
        ></textarea>
        <input type="submit" id="save" value="Actualizar" />
        <h4 className="title"></h4>
      </form>
    </div>
  );
};

export default EditFilm;
