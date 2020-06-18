import React from 'react'


const Film = ({ id, imdbTitle, title, description, poster, rating, genre, ratingImdb, votes }) => {


    return (
        <div className="film_box">
            <div className="film">
                <div className="film_poster_box">
                    <div className="film_poster_box_img">
                        <img src={poster} alt={"film poster " + title} />
                    </div>
                    <div className="film_poster_box_top">
                        <h2>{title}</h2>
                    </div>
                    <div className="film_poster_box_bot">
                        <div className={"vignette_" + genre}>{genre}</div>
                        <div className="notes">
                            <div className="note_imdb">
                                <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" />
                                <p>{ratingImdb} /10</p>
                            </div>
                            <div className="note">
                                <p>users</p><p> {rating} /10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video_separator"></div>
                <div className="film_videos">
                    <div className="film_video">
                        <div>play</div>
                        <h2>nom video</h2>
                    </div>
                </div>
                <div className="video_separator"></div>
                <div className="film_description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )

}

export default Film;
