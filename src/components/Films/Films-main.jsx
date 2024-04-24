import React, { useState } from 'react';
import "./Films-main.css"
import FilmsItem from './Films-item';
import films from './Films-data.js'
import FilmsAdding from './Films-adding.jsx';
import { nanoid } from 'nanoid';

const Main = () => {
    const [filmsList, setfilmsList] = useState(films);
    const addFilm = (movie)=>{
        const m = movie;
        m.id = nanoid();
        setfilmsList([...films, m]);

    }
    return (
        <div className="wrapper">
            <FilmsAdding addFilm={addFilm}/>
            <div className="content">
                {filmsList.map((item)=>(
                    <FilmsItem {...item} key={item.id}/>
                ))}             
                
            </div>
        </div>
    );
}

export default Main;
