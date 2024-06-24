import React, { useState } from "react";

const FilmsAddingForm = ({ visibleForm, addFilm }) => {
  let flag = true;
  const [title, settitle] = useState("");
  const [year, setyear] = useState("");
  const [genre, setgenre] = useState("");
  const [image, setimage] = useState("");

  const [titleError, settitleError] = useState(null);
  const [yearError, setyearError] = useState(null);
  const [genreError, setgenreError] = useState(null);
  const [imageError, setimageError] = useState(null);

  const titleAudit = (title) => {
    if (title.trim().length === 0) {
      settitleError("Title is required");
      flag = false;
    } else {
      return title;
    }
  };
  const yearAudit = (year) => {
    if (year.trim().length === 0) {
      setyearError("Year is required");
      flag = false;
    } else {
      return year;
    }
  };
  const genreAudit = (genre) => {
    if (genre.trim().length === 0) {
      setgenreError("Genre is required");
      flag = false;
    } else {
      return genre;
    }
  };
  const imageAudit = (image) => {
    if (image.trim().length === 0) {
      return 'https://www.kpi.kharkov.ua/ukr/wp-content/uploads/sites/2/2017/10/Film-300x200.jpg';
    } else {
      return image;
    }
    
  };
  const clickHandler = () => {
    const movie = {
      title: titleAudit(title),
      year: yearAudit(year),
      genre: genreAudit(genre),
      image: imageAudit(image),
    };
    if (flag) {
      addFilm(movie);
      settitle("");
      setyear("");
      setgenre("");
      setimage("");
      visibleForm();
    }
  };

  return (
    <div className="adding__form">
      <div className="adding__form-item" >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={title}
          name="name"
          onChange={(event) => settitle(event.target.value)}
        />
      </div>
      {titleError && <div className="error">{titleError}</div>}
      <div className="adding__form-item">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          value={year}
          name="year"
          onChange={(event) => setyear(event.target.value)}
        />
      </div>
      {yearError && <div className="error">{yearError}</div>}
      <div className="adding__form-item">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          value={genre}
          name="genre"
          onChange={(event) => setgenre(event.target.value)}
        />
      </div>
      {genreError && <div className="error">{genreError}</div>}
      <div className="adding__form-item">
        <label htmlFor="image">Image url</label>
        <input
          type="text"
          value={image}
          name="image"
          onChange={(event) => setimage(event.target.value)}
        />
      </div>
      {genreError && <div className="error">{imageError}</div>}
      <button onClick={clickHandler} className="btn" >
        Add movie
      </button>
    </div>
  );
};

export default FilmsAddingForm;
