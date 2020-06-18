import React from 'react'


const Film = ({ id, imdbTitle, title, description, poster, rating, genre, ratingImdb, votes }) => {


    return (
        <div className="film_box">
            <div className="film">
                <div className="film_poster_box">
                    <div className="film_poster_box_img">
                        <img src={poster} alt={"film poster " + title}/>
                    </div>
                    <div className="film_poster_box_top">
                        <h2>{title}</h2>
                    </div>
                    <div className="film_poster_box_bot">
                        <p>genre</p>
                        <p>note imdb</p>
                        <p>note perso</p>
                    </div>
                </div>
                <div className="film_videos">
                    <div className="film_video">
                        <div>play</div>
                        <h2>nom video</h2>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )

}

export default Film;
