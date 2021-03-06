import strapi from '../config/production/strapi.json';

console.log("strapi loaded",strapi);
function getStrapiMovies(filter) {
    //console.log("get  movies with filter",filter);
    let uri =  strapi.uri + "/films";
    if (filter !== "")
    {
        uri += "?" + filter;
    }
    return fetch(uri)
    .then(response=>response.json())
    .then(data => {
        //console.log("data retrieved",data);
        const filterData = {
            loaded: true,
            films: data,
            error: ""
        }
        return filterData;
    })
    .catch(e=>{
        //console.log("error",e)
        const filterData = {
            loaded: true,
            films: [],
            error: e
        }
        return filterData;
    });
    //console.log ("test",test);
    //return "bidule";
  }
  export default getStrapiMovies;