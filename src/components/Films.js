import React, {useState} from 'react';
import Film from './Film.js';
//import useState from 'react';
const Films = ({films,display_mode,count,filter}) => {

    let style = "films_" + display_mode;
    let currentCount =0;
    const filmsList = films.map((film)=>{
        if (currentCount < count)
        {
            currentCount++;
            return (
                <Film key={film.id} id={film.id} name={film.name}/>
            )
            
        }
    })
    return (
        <div className={style}>
            <p>des films</p>
            {filmsList}
        </div>
    )
}

export default Films
