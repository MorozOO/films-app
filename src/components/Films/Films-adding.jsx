import React, { useState } from 'react';
import FilmsAddForms from './Films-addingForm';
const FilmsAdding = ({addFilm}) => {
    const [showForm, setshowForm] = useState(false);
    const [showBtnAdd, setshowBtnAdd] = useState(true);
    const visibleForm =() =>{
        setshowForm(true);
        setshowBtnAdd(false);
    }
    const inVsibleForm =() =>{
        setshowForm(false);
        setshowBtnAdd(true);
    }
    return (
        <div className="adding">                
                {showBtnAdd &&<button onClick={visibleForm} className='btn'>Add movie</button>}
                {showForm &&<FilmsAddForms visibleForm = {inVsibleForm} addFilm={addFilm}/>}
            </div>
    );
}

export default FilmsAdding;
