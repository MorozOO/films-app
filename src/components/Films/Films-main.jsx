import React, { useState } from "react";
import "./Films-main.css";
import FilmsItem from "./Films-item";
import films from "./Films-data.js";
import FilmsAdding from "./Films-adding.jsx";
import FilterControlPanel from "../filterControlPanel/filterControlPanel.jsx";
import { nanoid } from "nanoid";

const Main = () => {
  const [filmsList, setfilmsList] = useState(films);
  const addFilm = (movie) => {
    var m = movie;
    m.id = nanoid();
    setfilmsList([...filmsList, m]);
  };
  const sortYear = () => {
    const sortedFilms = [...filmsList].sort((a, b) => a.year - b.year);
    setfilmsList(sortedFilms);
  };
  const sortByName = () => {
    const sortedFilms = [...filmsList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setfilmsList(sortedFilms);
  };
  const sortByGenre = () => {
    const sortedFilms = [...filmsList].sort((a, b) =>
      a.genre.localeCompare(b.genre)
    );
    setfilmsList(sortedFilms);
  };
  const sortById = () => {
    const sortedFilms = [...filmsList].sort((a, b) => a.id - b.id);
    setfilmsList(sortedFilms);
  };
  return (
    <div className="wrapper">
      <FilmsAdding addFilm={addFilm} />
      <FilterControlPanel
        sortYear={sortYear}
        sortByName={sortByName}
        sortByGenre={sortByGenre}
        sortById={sortById}
      />

      <div className="content">
        {filmsList.map((item) => (
          <FilmsItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
