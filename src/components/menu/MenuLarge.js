import React from 'react'

const MenuLarge = ({ genres }) => {
    const genresList = genres.list.map((g) => {
        return (
            <li>
                <a href={"#" + g + "_films"} >{genres[g].title}</a>
            </li>
        )
    })
    return (
        <div className="menu_large">
            <ul>
                <li>
                    <a href={"#top_films"} >meilleurs films</a>
                </li>
                {genresList}
            </ul>
        </div>
    )
}

export default MenuLarge
