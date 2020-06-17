function initStorage(){
    let filtersList = [
        "_sort=rating:ASC&_limit=3",
        "genre=action&_limit=6"
    ]
    let filters = {};
    if (localStorage.getItem("filters"))
    {
        filters = JSON.parse(localStorage.getItem("filters"));
    }

    filtersList.forEach(
        f => {
            if (!filters[f])
            {
                filters[f] = {loaded:false,films:[]};
            }
        }
    )
    localStorage.setItem("filters",JSON.stringify(filters));
};
export default initStorage;