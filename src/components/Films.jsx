import React from 'react';
import Film from './Film.jsx';

const Films = ({count,display_mode}) => {

    let style = "films_" + display_mode;
    
    return (
        <div className={style}>
            <p>des films</p>
            <Film name="film1"></Film>
            <Film name="film2"></Film>
            <Film name="film3"></Film>
        </div>
    )
}

export default Films
