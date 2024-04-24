import React, { useState } from "react";

const FilmsAddingForm = ({visibleForm, addFilm }) => {
  const [title, settitle] = useState("");
  const [year, setyear] = useState("");
  const [genre, setgenre] = useState("");
  const [image, setimage] = useState("");
  const clickHandler = () => {
    const movie = {
      title: title,
      year: year,
      genre: genre,
      image: image,
    };
    addFilm(movie);
    settitle("");
    setyear("");
    setgenre("");
    setimage("");
    visibleForm();
  };

  return (
    <div className="adding__form">
      <div className="adding__form-item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={title}
          name="name"
          onChange={(event) => settitle(event.target.value)}
        />
      </div>
      <div className="adding__form-item">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          value={year}
          name="year"
          onChange={(event) => setyear(event.target.value)}
        />
      </div>
      <div className="adding__form-item">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          value={genre}
          name="genre"
          onChange={(event) => setgenre(event.target.value)}
        />
      </div>
      <div className="adding__form-item">
        <label htmlFor="image">Image url</label>
        <input
          type="text"
          value={image}
          name="image"
          onChange={(event) => setimage(event.target.value)}
        />
      </div>
      <button onClick={clickHandler} className="btn">
        Add movie
      </button>
    </div>
  );
};

export default FilmsAddingForm;
