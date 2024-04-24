import React, { useState } from "react";

const FilmsItem = (movie) => {
  const [moreInfo, setmoreInfo] = useState(false);
  const [btnName, setbtnName] = useState("Show more");
  const visibleMoreInfo = () => {
    setmoreInfo(!moreInfo);
    setbtnName(moreInfo ? "Show more" : "Show less");
  };
  return (
    <div className="content__item item">
      <div className="item__image">
        <img src={movie.image} />
      </div>
      <div className="item__body">
        <h4>{movie.title}</h4>
        {moreInfo && (
          <>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
          </>
        )}
      </div>
      <button className="btn" onClick={visibleMoreInfo}>
        {btnName}
      </button>
    </div>
  );
};

export default FilmsItem;
/* <p>{movie.year}</p>
<p>{movie.genre}</p>
*/
